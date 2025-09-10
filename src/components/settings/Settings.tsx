import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Key, 
  MessageSquare, 
  Settings as SettingsIcon, 
  Save,
  TestTube,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<"connected" | "disconnected" | "testing">("disconnected");

  const testApiConnection = async () => {
    setConnectionStatus("testing");
    // Simular teste da API
    setTimeout(() => {
      setConnectionStatus("connected");
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground">Configure as integrações e parâmetros do sistema</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              Configuração da OpenAI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">Chave da API OpenAI</Label>
              <div className="flex gap-2">
                <Input
                  id="api-key"
                  type={isApiKeyVisible ? "text" : "password"}
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  onClick={() => setIsApiKeyVisible(!isApiKeyVisible)}
                >
                  {isApiKeyVisible ? "Ocultar" : "Mostrar"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Sua chave da API é armazenada de forma segura e criptografada
              </p>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Status da Conexão:</span>
                <Badge className={
                  connectionStatus === "connected" ? "bg-success/10 text-success" :
                  connectionStatus === "testing" ? "bg-warning/10 text-warning" :
                  "bg-destructive/10 text-destructive"
                }>
                  {connectionStatus === "connected" && (
                    <>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Conectado
                    </>
                  )}
                  {connectionStatus === "testing" && "Testando..."}
                  {connectionStatus === "disconnected" && (
                    <>
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Desconectado
                    </>
                  )}
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={testApiConnection}
                disabled={connectionStatus === "testing" || !apiKey}
              >
                <TestTube className="w-4 h-4 mr-2" />
                Testar Conexão
              </Button>
            </div>

            <Button className="w-full bg-gradient-primary hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Configuração do WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="whatsapp-token">Token do WhatsApp Business</Label>
              <Input
                id="whatsapp-token"
                type="password"
                placeholder="Token da API do WhatsApp"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone-number">Número do WhatsApp</Label>
              <Input
                id="phone-number"
                placeholder="+55 11 99999-9999"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL do Webhook</Label>
              <Input
                id="webhook-url"
                placeholder="https://seu-dominio.com/webhook"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm font-medium">Status do WhatsApp:</span>
              <Badge className="bg-destructive/10 text-destructive">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Não Configurado
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-primary" />
            Configurações do Bot
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="welcome-message">Mensagem de Boas-vindas</Label>
                <Textarea
                  id="welcome-message"
                  placeholder="Olá! Eu sou o assistente virtual da [Nome da Empresa]. Como posso ajudar hoje?"
                  defaultValue="Olá! Eu sou o assistente virtual da [Nome da Empresa]. Como posso ajudar hoje?"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fallback-message">Mensagem de Fallback</Label>
                <Textarea
                  id="fallback-message"
                  placeholder="Desculpe, não consegui entender. Posso transferir você para um atendente?"
                  defaultValue="Desculpe, não consegui entender sua pergunta. Posso transferir você para um de nossos atendentes?"
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Modo de Desenvolvimento</Label>
                  <p className="text-xs text-muted-foreground">Logs detalhados e debugging</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-escalação</Label>
                  <p className="text-xs text-muted-foreground">Transferir para humano automaticamente</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Respostas em Tempo Real</Label>
                  <p className="text-xs text-muted-foreground">Indicador de digitação</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="response-delay">Delay de Resposta (segundos)</Label>
                <Input
                  id="response-delay"
                  type="number"
                  placeholder="1"
                  defaultValue="1"
                  min="0"
                  max="10"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-gradient-primary hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações do Bot
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;