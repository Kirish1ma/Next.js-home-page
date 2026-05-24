import { contacts } from "@/data/contacts";
import { Section } from "@/components/ui/Section";

export function ContactsSection() {
  return (
    <Section id="contacts" eyebrow="Contacts" title="如何聯係我">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <p className="max-w-2xl text-xl leading-9 text-muted">
          如果你想交流閱讀、寫作、Linux、Web 系統或只是隨便聊聊，可以從這些入口找到我。
        </p>
        <div className="divide-y divide-line rounded-3xl border border-line">
          {contacts.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              className="flex items-center justify-between p-6 font-display text-4xl transition hover:bg-ink hover:text-paper"
            >
              {contact.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
