import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import ConversationsList from "@/components/conversations/ConversationsList";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";
import Settings from "@/components/settings/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "conversations":
        return <ConversationsList />;
      case "knowledge":
        return <KnowledgeBase />;
      case "analytics":
        return <div className="p-6"><h1 className="text-3xl font-bold">Analytics - Em breve</h1></div>;
      case "bot-settings":
        return <div className="p-6"><h1 className="text-3xl font-bold">Configurações do Bot - Em breve</h1></div>;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-subtle">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
