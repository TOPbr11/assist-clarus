import { MessageSquare, Users, FileText, TrendingUp, Activity, Clock } from "lucide-react";
import MetricsCard from "./MetricsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const recentConversations = [
    { id: 1, user: "+55 11 99999-9999", message: "Como posso fazer um pedido?", time: "2 min atrás", status: "answered" },
    { id: 2, user: "+55 11 88888-8888", message: "Qual o horário de funcionamento?", time: "5 min atrás", status: "answered" },
    { id: 3, user: "+55 11 77777-7777", message: "Preciso cancelar meu pedido", time: "8 min atrás", status: "pending" },
    { id: 4, user: "+55 11 66666-6666", message: "Informações sobre entrega", time: "12 min atrás", status: "answered" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu chatbot de atendimento</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant transition-smooth">
          <Activity className="w-4 h-4 mr-2" />
          Relatório Completo
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Conversas Hoje"
          value="247"
          change="+12% vs ontem"
          changeType="positive"
          icon={MessageSquare}
          gradient
        />
        <MetricsCard
          title="Usuários Ativos"
          value="189"
          change="+8% vs ontem"
          changeType="positive"
          icon={Users}
        />
        <MetricsCard
          title="Taxa de Resolução"
          value="94%"
          change="+2% vs ontem"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricsCard
          title="Tempo Médio de Resposta"
          value="1.2s"
          change="-0.3s vs ontem"
          changeType="positive"
          icon={Clock}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Conversas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentConversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
              >
                <div className="flex-1">
                  <p className="font-medium text-sm text-foreground">{conversation.user}</p>
                  <p className="text-sm text-muted-foreground truncate">{conversation.message}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{conversation.time}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    conversation.status === 'answered' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {conversation.status === 'answered' ? 'Respondida' : 'Pendente'}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Base de Conhecimento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-sm">Documentos Indexados</p>
                <p className="text-xs text-muted-foreground">PDFs, textos e URLs</p>
              </div>
              <span className="text-2xl font-bold text-primary">12</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium text-sm">Última Atualização</p>
                <p className="text-xs text-muted-foreground">Base de dados RAG</p>
              </div>
              <span className="text-xs text-muted-foreground">Há 2 horas</span>
            </div>

            <Button variant="outline" className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Gerenciar Documentos
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;