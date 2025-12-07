import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase, Company } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Plus, Trash2, Edit, LogOut, Upload } from 'lucide-react';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [exhibitors, setExhibitors] = useState<Company[]>([]);
  const [sponsors, setSponsors] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    type: 'exhibitor' as 'exhibitor' | 'sponsor',
    logo_url: ''
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('companies')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching companies:', error);
    } else {
      const allCompanies = data || [];
      setCompanies(allCompanies);
      setExhibitors(allCompanies.filter(c => c.type === 'exhibitor'));
      setSponsors(allCompanies.filter(c => c.type === 'sponsor'));
    }
    setLoading(false);
  };

  const uploadLogo = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('company-logos')
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('company-logos')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let logoUrl = formData.logo_url;
      
      // Upload new logo if file selected
      if (logoFile) {
        logoUrl = await uploadLogo(logoFile);
      }

      const companyData = {
        name: formData.name,
        description: formData.description,
        website: formData.website || null,
        type: formData.type,
        logo_url: logoUrl,
      };

      if (editingId) {
        // Update existing company
        const { error } = await supabase
          .from('companies')
          .update(companyData)
          .eq('id', editingId);
        
        if (error) throw error;
      } else {
        // Create new company
        const { error } = await supabase
          .from('companies')
          .insert([companyData]);
        
        if (error) throw error;
      }

      // Reset form
      setFormData({ name: '', description: '', website: '', type: 'exhibitor', logo_url: '' });
      setLogoFile(null);
      setEditingId(null);
      setShowForm(false);
      fetchCompanies();
    } catch (error) {
      console.error('Error saving company:', error);
      alert('Failed to save company. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (company: Company) => {
    setFormData({
      name: company.name,
      description: company.description,
      website: company.website || '',
      type: company.type,
      logo_url: company.logo_url
    });
    setEditingId(company.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this company?')) return;

    const { error } = await supabase
      .from('companies')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting company:', error);
      alert('Failed to delete company');
    } else {
      fetchCompanies();
    }
  };

  const cancelEdit = () => {
    setFormData({ name: '', description: '', website: '', type: 'exhibitor', logo_url: '' });
    setLogoFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold font-display mb-2">Admin Dashboard</h1>
                <p className="text-muted-foreground">Logged in as: {user?.email}</p>
              </div>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>

            {/* Add/Edit Form */}
            {showForm ? (
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  {editingId ? 'Edit Company' : 'Add New Company'}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Company Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="type">Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: 'exhibitor' | 'sponsor') => 
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exhibitor">Exhibitor</SelectItem>
                          <SelectItem value="sponsor">Sponsor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="logo">Logo Image *</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                      />
                      {formData.logo_url && !logoFile && (
                        <img src={formData.logo_url} alt="Current logo" className="h-12 w-12 object-contain rounded" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {editingId && !logoFile ? 'Leave empty to keep current logo' : 'Upload a company logo (PNG, JPG, SVG)'}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={uploading}>
                      {uploading ? 'Saving...' : editingId ? 'Update Company' : 'Add Company'}
                    </Button>
                    <Button type="button" variant="outline" onClick={cancelEdit}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <Button onClick={() => setShowForm(true)} className="mb-8">
                <Plus className="mr-2 h-4 w-4" />
                Add New Company
              </Button>
            )}

            {/* Companies List - Split by Type */}
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <div className="space-y-8">
                {/* Exhibitors Section */}
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Exhibitors ({exhibitors.length})
                    </span>
                  </h2>
                  
                  {exhibitors.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No exhibitors added yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exhibitors.map((company) => (
                        <div key={company.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <img 
                                src={company.logo_url} 
                                alt={company.name}
                                className="w-12 h-12 object-contain rounded"
                              />
                              <div>
                                <h3 className="font-semibold">{company.name}</h3>
                                <span className="text-xs text-muted-foreground capitalize">
                                  {company.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {company.description}
                          </p>
                          
                          {company.website && (
                            <a 
                              href={company.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline block truncate"
                            >
                              {company.website}
                            </a>
                          )}

                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(company)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(company.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sponsors Section */}
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      Sponsors ({sponsors.length})
                    </span>
                  </h2>
                  
                  {sponsors.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No sponsors added yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sponsors.map((company) => (
                        <div key={company.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <img 
                                src={company.logo_url} 
                                alt={company.name}
                                className="w-12 h-12 object-contain rounded"
                              />
                              <div>
                                <h3 className="font-semibold">{company.name}</h3>
                                <span className="text-xs text-muted-foreground capitalize">
                                  {company.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {company.description}
                          </p>
                          
                          {company.website && (
                            <a 
                              href={company.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline block truncate"
                            >
                              {company.website}
                            </a>
                          )}

                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(company)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(company.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default AdminDashboard;
