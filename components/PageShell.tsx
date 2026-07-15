import { PageFrame } from "@/components/PageFrame";

type PageShellProps = {
  children: React.ReactNode;
  active?: "work" | "about";
  exterior?: React.ReactNode;
};

export function PageShell({ children, active, exterior }: PageShellProps) {
  return (
    <PageFrame panelVariant="solid" active={active} exterior={exterior}>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden pt-6">
        {children}
      </div>
    </PageFrame>
  );
}
