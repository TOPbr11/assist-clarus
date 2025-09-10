import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageSquare, 
  User, 
  Clock,
  CheckCircle,
  AlertCircle,
  Filter
} from "lucide-react";

const ConversationsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const conversations = [
    {
      id: 1,
      user: "+55 11 99999-9999",
      lastMessage: "Como posso fazer um pedido pelo WhatsApp?",
      time: "2 min atrás",
      status: "answered",
      messageCount: 5,
      satisfaction: "high"
    },
    {
      id: 2,
      user: "+55 11 88888-8888",
      lastMessage: "Qual o horário de funcionamento da loja?",
      time: "5 min atrás",
      status: "answered",
      messageCount: 3,
      satisfaction: "high"
    },
    {
      id: 3,
      user: "+55 11 77777-7777",
      lastMessage: "Preciso cancelar meu pedido #12345",
      time: "8 min atrás",
      status: "escalated",
      messageCount: 7,
      satisfaction: "low"
    },
    {
      id: 4,
      user: "+55 11 66666-6666",
      lastMessage: "Informações sobre prazo de entrega",
      time: "12 min atrás",
      status: "answered",
      messageCount: 4,
      satisfaction: "medium"
    },
    {
      id: 5,
      user: "+55 11 55555-5555",
      lastMessage: "Como funciona a garantia dos produtos?",
      time: "15 min atrás",
      status: "pending",
      messageCount: 2,
      satisfaction: null
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "escalated":
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case "pending":
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-success/10 text-success";
      case "escalated":
        return "bg-warning/10 text-warning";
      case "pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getSatisfactionColor = (satisfaction: string | null) => {
    switch (satisfaction) {
      case "high":
        return "bg-success";
      case "medium":
        return "bg-warning";
      case "low":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Conversas</h1>
          <p className="text-muted-foreground">Histórico e gerenciamento de conversas do WhatsApp</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant transition-smooth">
            <MessageSquare className="w-4 h-4 mr-2" />
            Nova Conversa
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-card">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Hoje</p>
              <p className="text-2xl font-bold text-foreground">247</p>
            </div>
            <MessageSquare className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Resolvidas</p>
              <p className="text-2xl font-bold text-success">232</p>
            </div>
            <CheckCircle className="h-8 w-8 text-success" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
              <p className="text-2xl font-bold text-warning">8</p>
            </div>
            <Clock className="h-8 w-8 text-warning" />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Escaladas</p>
              <p className="text-2xl font-bold text-destructive">7</p>
            </div>
            <AlertCircle className="h-8 w-8 text-destructive" />
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Conversas Recentes</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Buscar por número ou mensagem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80"
              />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-accent flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground">{conversation.user}</h3>
                      <span className="text-sm text-muted-foreground">
                        {conversation.messageCount} mensagens
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate max-w-96">
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {conversation.satisfaction && (
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">Satisfação:</span>
                      <div className={`w-2 h-2 rounded-full ${getSatisfactionColor(conversation.satisfaction)}`} />
                    </div>
                  )}
                  
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{conversation.time}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {getStatusIcon(conversation.status)}
                      <Badge className={getStatusColor(conversation.status)}>
                        {conversation.status === "answered" && "Respondida"}
                        {conversation.status === "escalated" && "Escalada"}
                        {conversation.status === "pending" && "Pendente"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConversationsList;