import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase, Company, Event } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Plus, Trash2, Edit, LogOut, Upload } from 'lucide-react';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [exhibitors, setExhibitors] = useState<Company[]>([]);
  const [sponsors, setSponsors] = useState<Company[]>([]);
  const [sustainabilityPartners, setSustainabilityPartners] = useState<Company[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    website: '',
    type: 'exhibitor' as 'exhibitor' | 'sponsor' | 'sustainability-partner',
    logo_url: '',
    is_main_partner: false
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  
  // Event form state
  const [eventFormData, setEventFormData] = useState({
    title: '',
    description: '',
    link: '',
    image_url: ''
  });
  const [eventImageFile, setEventImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchCompanies();
    fetchEvents();
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
      setSustainabilityPartners(allCompanies.filter(c => c.type === 'sustainability-partner'));
    }
    setLoading(false);
  };

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
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
        is_main_partner: formData.type === 'exhibitor' ? formData.is_main_partner : false,
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
      setFormData({ name: '', description: '', website: '', type: 'exhibitor', logo_url: '', is_main_partner: false });
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
      logo_url: company.logo_url,
      is_main_partner: company.is_main_partner || false
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
    setFormData({ name: '', description: '', website: '', type: 'exhibitor', logo_url: '', is_main_partner: false });
    setLogoFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  // Event CRUD functions
  const uploadEventImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('event-images')
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('event-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = eventFormData.image_url;
      
      // Upload new image if file selected
      if (eventImageFile) {
        imageUrl = await uploadEventImage(eventImageFile);
      }

      const eventData = {
        title: eventFormData.title,
        description: eventFormData.description,
        link: eventFormData.link || null,
        image_url: imageUrl,
      };

      if (editingEventId) {
        // Update existing event
        const { error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', editingEventId);
        
        if (error) throw error;
      } else {
        // Create new event
        const { error } = await supabase
          .from('events')
          .insert([eventData]);
        
        if (error) throw error;
      }

      // Reset form
      setEventFormData({ title: '', description: '', link: '', image_url: '' });
      setEventImageFile(null);
      setEditingEventId(null);
      setShowEventForm(false);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to save event. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleEventEdit = (event: Event) => {
    setEventFormData({
      title: event.title,
      description: event.description,
      link: event.link || '',
      image_url: event.image_url
    });
    setEditingEventId(event.id);
    setShowEventForm(true);
  };

  const handleEventDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    } else {
      fetchEvents();
    }
  };

  const cancelEventEdit = () => {
    setEventFormData({ title: '', description: '', link: '', image_url: '' });
    setEventImageFile(null);
    setEditingEventId(null);
    setShowEventForm(false);
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
                        onValueChange={(value: 'exhibitor' | 'sponsor' | 'sustainability-partner') => 
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="exhibitor">Exhibitor</SelectItem>
                          <SelectItem value="sponsor">Sponsor</SelectItem>
                          <SelectItem value="sustainability-partner">Sustainability Partner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {formData.type === 'exhibitor' && (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="is_main_partner"
                        checked={formData.is_main_partner}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, is_main_partner: checked as boolean })
                        }
                      />
                      <Label 
                        htmlFor="is_main_partner" 
                        className="text-sm font-normal cursor-pointer"
                      >
                        Mark as Main Partner (will be displayed prominently on Our Exhibitors page)
                      </Label>
                    </div>
                  )}

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
              <div className="flex gap-4 mb-8">
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Company
                </Button>
                <Button onClick={() => setShowEventForm(true)} variant="secondary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Event
                </Button>
              </div>
            )}

            {/* Add/Edit Event Form */}
            {showEventForm && (
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  {editingEventId ? 'Edit Event' : 'Add New Event'}
                </h2>
                
                <form onSubmit={handleEventSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="event-title">Event Title *</Label>
                    <Input
                      id="event-title"
                      value={eventFormData.title}
                      onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="event-description">Description *</Label>
                    <Textarea
                      id="event-description"
                      value={eventFormData.description}
                      onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })}
                      required
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="event-link">Link (Google Form, etc.)</Label>
                    <Input
                      id="event-link"
                      type="url"
                      placeholder="https://forms.google.com/..."
                      value={eventFormData.link}
                      onChange={(e) => setEventFormData({ ...eventFormData, link: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="event-image">Event Image *</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="event-image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setEventImageFile(e.target.files?.[0] || null)}
                      />
                      {eventFormData.image_url && !eventImageFile && (
                        <img src={eventFormData.image_url} alt="Current image" className="h-12 w-12 object-cover rounded" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {editingEventId && !eventImageFile ? 'Leave empty to keep current image' : 'Upload an event image (PNG, JPG)'}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={uploading}>
                      {uploading ? 'Saving...' : editingEventId ? 'Update Event' : 'Add Event'}
                    </Button>
                    <Button type="button" variant="outline" onClick={cancelEventEdit}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
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

                {/* Sustainability Partners Section */}
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Sustainability Partners ({sustainabilityPartners.length})
                    </span>
                  </h2>
                  
                  {sustainabilityPartners.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No sustainability partners added yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sustainabilityPartners.map((company) => (
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
                                  Sustainability Partner
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

                {/* Events Section */}
                <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Events ({events.length})
                    </span>
                  </h2>
                  
                  {events.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No events added yet.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {events.map((event) => (
                        <div key={event.id} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold">{event.title}</h3>
                              <span className="text-xs text-muted-foreground">Event</span>
                            </div>
                          </div>
                          
                          {event.image_url && (
                            <img 
                              src={event.image_url} 
                              alt={event.title}
                              className="w-full h-32 object-cover rounded"
                            />
                          )}
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {event.description}
                          </p>
                          
                          {event.link && (
                            <a 
                              href={event.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline block truncate"
                            >
                              {event.link}
                            </a>
                          )}

                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEventEdit(event)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleEventDelete(event.id)}
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
