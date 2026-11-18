import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import {
  CONTENT_FIELDS,
  ContentField,
  ContentGroup,
  SITE_CONTENT_QUERY_KEY,
  fetchSiteContentRows,
  isOn,
  uploadSiteAsset,
} from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { RotateCcw } from 'lucide-react';

export const ContentEditor = ({ group }: { group: ContentGroup }) => {
  const queryClient = useQueryClient();
  const fields: readonly ContentField[] = CONTENT_FIELDS.filter((f) => f.group === group);
  const sections = [...new Set(fields.map((f) => f.section))];

  const { data: rows, isLoading, error } = useQuery({
    queryKey: SITE_CONTENT_QUERY_KEY,
    queryFn: fetchSiteContentRows,
  });

  const [values, setValues] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (rows) {
      setValues(Object.fromEntries(fields.map((f) => [f.key, rows[f.key] ?? ''])));
    }
    // fields is derived from a constant, only reload when the stored rows change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const setValue = (key: string, value: string) => setValues((v) => ({ ...v, [key]: value }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const updated = { ...values };
      for (const [key, file] of Object.entries(files)) {
        if (file) updated[key] = await uploadSiteAsset(file, key);
      }

      const { error } = await supabase
        .from('site_content')
        .upsert(fields.map((f) => ({ key: f.key, value: updated[f.key] ?? '' })));
      if (error) throw error;

      setFiles({});
      await queryClient.invalidateQueries({ queryKey: SITE_CONTENT_QUERY_KEY });
      setMessage('Saved! Changes are live on the site.');
    } catch (err) {
      console.error('Error saving content:', err);
      alert('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  if (error) {
    return (
      <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg text-muted-foreground">
        Could not load site content. Make sure <code>supabase/content.sql</code> has been run in the Supabase SQL Editor.
      </div>
    );
  }

  const renderInput = (field: ContentField) => {
    const value = values[field.key] ?? '';
    const id = `content-${field.key}`;

    switch (field.type) {
      case 'textarea':
      case 'lines':
        return (
          <Textarea
            id={id}
            value={value}
            placeholder={field.default}
            onChange={(e) => setValue(field.key, e.target.value)}
            rows={field.type === 'lines' ? 6 : 4}
          />
        );
      case 'boolean':
        return (
          <div className="flex items-center gap-3">
            <Switch
              id={id}
              checked={isOn(value || field.default)}
              onCheckedChange={(checked) => setValue(field.key, checked ? 'true' : 'false')}
            />
            <span className="text-sm text-muted-foreground">{isOn(value || field.default) ? 'Open' : 'Closed'}</span>
          </div>
        );
      case 'image':
      case 'file': {
        const current = value || field.default;
        return (
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Input
                id={id}
                type="file"
                accept={field.type === 'image' ? 'image/*' : 'application/pdf'}
                onChange={(e) => setFiles((f) => ({ ...f, [field.key]: e.target.files?.[0] || null }))}
              />
              {field.type === 'image' ? (
                <img src={current} alt={field.label} className="h-16 w-24 object-cover rounded border" />
              ) : (
                <a href={current} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline whitespace-nowrap">
                  View current
                </a>
              )}
            </div>
            {value && (
              <Button type="button" variant="ghost" size="sm" onClick={() => setValue(field.key, '')}>
                <RotateCcw className="mr-2 h-3 w-3" />
                Reset to default
              </Button>
            )}
          </div>
        );
      }
      default:
        return (
          <Input
            id={id}
            type={field.type === 'datetime' ? 'datetime-local' : field.type}
            value={value}
            placeholder={field.default}
            onChange={(e) => setValue(field.key, e.target.value)}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {group === 'texts' && (
        <p className="text-sm text-muted-foreground">
          Write <code>{'{date}'}</code> or <code>{'{year}'}</code> in any text and it is replaced with the event date or year.
          Empty fields use the default text shown in grey.
        </p>
      )}

      {sections.map((section) => (
        <div key={section} className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg space-y-4">
          <h2 className="text-2xl font-bold">{section}</h2>
          {fields
            .filter((f) => f.section === section)
            .map((field) => (
              <div key={field.key}>
                <Label htmlFor={`content-${field.key}`}>{field.label}</Label>
                {renderInput(field)}
                {field.help && <p className="text-sm text-muted-foreground mt-1">{field.help}</p>}
              </div>
            ))}
        </div>
      ))}

      <div className="flex items-center gap-4 sticky bottom-4">
        <Button type="submit" size="lg" disabled={saving} className="shadow-lg">
          {saving ? 'Saving...' : 'Save changes'}
        </Button>
        {message && <span className="text-sm text-muted-foreground">{message}</span>}
      </div>
    </form>
  );
};
