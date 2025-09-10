import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Trash2, 
  Search, 
  Plus,
  Eye,
  Download
} from "lucide-react";

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      name: "FAQ Atendimento ao Cliente.pdf",
      type: "PDF",
      size: "2.3 MB",
      status: "indexed",
      uploadDate: "2024-01-15",
      chunks: 45
    },
    {
      id: 2,
      name: "Políticas de Entrega.docx",
      type: "DOCX",
      size: "1.1 MB", 
      status: "processing",
      uploadDate: "2024-01-14",
      chunks: 23
    },
    {
      id: 3,
      name: "Catálogo de Produtos",
      type: "URL",
      size: "N/A",
      status: "indexed",
      uploadDate: "2024-01-13",
      chunks: 78
    },
    {
      id: 4,
      name: "Manual de Suporte Técnico.txt",
      type: "TXT",
      size: "512 KB",
      status: "indexed",
      uploadDate: "2024-01-12",
      chunks: 34
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "indexed":
        return "bg-success/10 text-success";
      case "processing":
        return "bg-warning/10 text-warning";
      case "error":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Base de Conhecimento</h1>
          <p className="text-muted-foreground">Gerencie os documentos que alimentam seu chatbot</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant transition-smooth">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Upload className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Upload de Arquivos</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Faça upload de PDFs, DOCX, TXT e outros documentos
            </p>
            <Button variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Selecionar Arquivos
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">Adicionar URL</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Indexe conteúdo diretamente de websites e páginas
            </p>
            <Button variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar URL
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
              <Search className="h-6 w-6 text-secondary-foreground" />
            </div>
            <CardTitle className="text-lg">Busca Semântica</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Teste a busca na base de conhecimento indexada
            </p>
            <Button variant="outline" className="w-full">
              <Search className="w-4 h-4 mr-2" />
              Testar Busca
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Documentos Indexados</CardTitle>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{doc.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                      <span>{doc.chunks} chunks</span>
                      <span>Adicionado em {doc.uploadDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={getStatusColor(doc.status)}>
                    {doc.status === "indexed" && "Indexado"}
                    {doc.status === "processing" && "Processando"}
                    {doc.status === "error" && "Erro"}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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

export default KnowledgeBase;