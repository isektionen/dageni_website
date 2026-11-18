import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { TEAM_QUERY_KEY, TeamMember, uploadSiteAsset, useTeamMembers } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2, Edit } from 'lucide-react';

const emptyForm = { role: '', name: '', email: '', image_url: '', highlighted: false, sort_order: 0 };

export const TeamEditor = () => {
  const queryClient = useQueryClient();
  const { team, loading } = useTeamMembers();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const refresh = () => queryClient.invalidateQueries({ queryKey: TEAM_QUERY_KEY });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const imageUrl = photoFile ? await uploadSiteAsset(photoFile, 'team') : formData.image_url;
      const memberData = {
        role: formData.role,
        name: formData.name,
        email: formData.email || null,
        image_url: imageUrl || null,
        highlighted: formData.highlighted,
        sort_order: formData.sort_order,
      };

      const { error } = editingId
        ? await supabase.from('team_members').update(memberData).eq('id', editingId)
        : await supabase.from('team_members').insert([memberData]);
      if (error) throw error;

      cancelEdit();
      refresh();
    } catch (err) {
      console.error('Error saving team member:', err);
      alert('Failed to save team member');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setFormData({
      role: member.role,
      name: member.name,
      email: member.email || '',
      image_url: member.image_url || '',
      highlighted: member.highlighted,
      sort_order: member.sort_order,
    });
    setEditingId(member.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to remove this team member?')) return;

    const { error } = await supabase.from('team_members').delete().eq('id', id);
    if (error) {
      console.error('Error deleting team member:', error);
      alert('Failed to delete team member');
    } else {
      refresh();
    }
  };

  const startAdd = () => {
    const nextOrder = team.reduce((max, m) => Math.max(max, m.sort_order), 0) + 1;
    setFormData({ ...emptyForm, sort_order: nextOrder });
    setShowForm(true);
  };

  const cancelEdit = () => {
    setFormData(emptyForm);
    setPhotoFile(null);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-8">
      {showForm ? (
        <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Team Member' : 'Add Team Member'}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="member-role">Role *</Label>
                <Input
                  id="member-role"
                  placeholder="Head of Events"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="member-name">Name(s) *</Label>
                <Input
                  id="member-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="member-email">Email</Label>
                <Input
                  id="member-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="member-order">Order (lower shows first)</Label>
                <Input
                  id="member-order"
                  type="number"
                  value={formData.sort_order}
                  onChange={(e) => setFormData({ ...formData, sort_order: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="member-highlighted"
                checked={formData.highlighted}
                onCheckedChange={(checked) => setFormData({ ...formData, highlighted: checked as boolean })}
              />
              <Label htmlFor="member-highlighted" className="text-sm font-normal cursor-pointer">
                Highlight (shown in the top row, e.g. project managers)
              </Label>
            </div>

            <div>
              <Label htmlFor="member-photo">Photo</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="member-photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                />
                {formData.image_url && !photoFile && (
                  <img src={formData.image_url} alt="Current photo" className="h-12 w-12 object-cover rounded" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {editingId && !photoFile ? 'Leave empty to keep current photo' : 'Square photos look best'}
              </p>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={saving}>
                {saving ? 'Saving...' : editingId ? 'Update Team Member' : 'Add Team Member'}
              </Button>
              <Button type="button" variant="outline" onClick={cancelEdit}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button onClick={startAdd}>
          <Plus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      )}

      <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Committee ({team.length})</h2>

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : team.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No team members added yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member) => (
              <div key={member.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  {member.image_url && (
                    <img src={member.image_url} alt={member.name} className="w-12 h-12 object-cover rounded" />
                  )}
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      #{member.sort_order} · {member.role}
                      {member.highlighted && ' · Highlighted'}
                    </span>
                  </div>
                </div>
                {member.email && <p className="text-xs text-muted-foreground truncate">{member.email}</p>}
                {!member.id.startsWith('default-') && (
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(member)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(member.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
