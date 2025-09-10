import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  MessageSquare, 
  FileText, 
  Settings, 
  BarChart3,
  Users,
  Bot
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "conversations", label: "Conversas", icon: MessageSquare },
    { id: "knowledge", label: "Base de Conhecimento", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "bot-settings", label: "Configurações do Bot", icon: Bot },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r border-border">
      <div className="flex items-center gap-3 p-6 border-b border-border">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
          <MessageSquare className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-foreground">ChatBot RAG</h1>
          <p className="text-sm text-muted-foreground">Painel de Controle</p>
        </div>
      </div>
      
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11 transition-smooth",
                activeTab === item.id && "bg-primary/10 text-primary font-medium shadow-elegant"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
          <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center">
            <Users className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Admin</p>
            <p className="text-xs text-muted-foreground">admin@empresa.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;