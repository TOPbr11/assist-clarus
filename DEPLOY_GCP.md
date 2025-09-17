# ChatBot RAG - Deploy no Google Cloud Platform

Este guia contém as instruções completas para fazer deploy da aplicação no Google Cloud Platform.

## Pré-requisitos

1. **Google Cloud SDK instalado**
   ```bash
   # Linux/macOS
   curl https://sdk.cloud.google.com | bash
   exec -l $SHELL
   ```

2. **Projeto GCP configurado**
   ```bash
   gcloud auth login
   gcloud config set project SEU_PROJECT_ID
   ```

## Opções de Deploy

### Opção 1: App Engine (Recomendado para iniciantes)

1. **Ativar APIs necessárias**
   ```bash
   gcloud services enable appengine.googleapis.com
   ```

2. **Fazer build da aplicação**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   gcloud app deploy app.yaml
   ```

4. **Visualizar aplicação**
   ```bash
   gcloud app browse
   ```

### Opção 2: Cloud Run (Recomendado para produção)

1. **Ativar APIs necessárias**
   ```bash
   gcloud services enable run.googleapis.com
   gcloud services enable cloudbuild.googleapis.com
   ```

2. **Build e deploy com Cloud Build**
   ```bash
   gcloud run deploy chatbot-rag \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated \
     --port 8080 \
     --memory 512Mi \
     --cpu 1
   ```

3. **Configurar domínio customizado (opcional)**
   ```bash
   gcloud run domain-mappings create \
     --service chatbot-rag \
     --domain seu-dominio.com \
     --region us-central1
   ```

### Opção 3: Google Kubernetes Engine (Para aplicações complexas)

1. **Criar cluster**
   ```bash
   gcloud container clusters create chatbot-cluster \
     --num-nodes=1 \
     --zone=us-central1-a
   ```

2. **Build da imagem**
   ```bash
   docker build -t gcr.io/SEU_PROJECT_ID/chatbot-rag .
   docker push gcr.io/SEU_PROJECT_ID/chatbot-rag
   ```

3. **Deploy no cluster**
   ```bash
   kubectl create deployment chatbot-rag \
     --image=gcr.io/SEU_PROJECT_ID/chatbot-rag
   kubectl expose deployment chatbot-rag \
     --type=LoadBalancer --port=80 --target-port=8080
   ```

## Configurações de Produção

### Variáveis de Ambiente
Configure no GCP Console ou via linha de comando:

```bash
# Para App Engine
gcloud app deploy --set-env-vars OPENAI_API_KEY=sua_chave_aqui

# Para Cloud Run
gcloud run services update chatbot-rag \
  --set-env-vars OPENAI_API_KEY=sua_chave_aqui \
  --region us-central1
```

### Monitoramento e Logs

1. **Visualizar logs**
   ```bash
   # App Engine
   gcloud app logs tail -s default

   # Cloud Run
   gcloud run services logs read chatbot-rag --region=us-central1
   ```

2. **Configurar alertas**
   - Acesse Google Cloud Console > Monitoring
   - Configure alertas para erros e métricas de performance

### Backup e Recuperação

1. **Backup automático dos dados**
   - Configure Cloud Storage para arquivos
   - Use Cloud SQL ou Firestore para dados estruturados

2. **Versionamento**
   ```bash
   # Manter versões anteriores no App Engine
   gcloud app deploy --no-promote
   ```

## Segurança

1. **HTTPS automático** - habilitado por padrão
2. **Firewall rules** - configure conforme necessário
3. **IAM** - configure permissões adequadas
4. **Secret Manager** - para chaves de API sensíveis

## Custos Estimados

- **App Engine**: ~$5-20/mês para tráfego baixo-médio
- **Cloud Run**: ~$2-15/mês (pay-per-use)
- **GKE**: ~$70+/mês (cluster sempre ativo)

## Troubleshooting

### Problemas Comuns

1. **Build falha**
   ```bash
   # Verificar logs
   gcloud builds log $(gcloud builds list --limit=1 --format="value(id)")
   ```

2. **Aplicação não carrega**
   - Verificar se porta 8080 está configurada
   - Verificar health checks

3. **Erros de CORS**
   - Configurar adequadamente no nginx.conf

## Scripts Úteis

Adicione ao package.json:

```json
{
  "scripts": {
    "deploy:appengine": "npm run build && gcloud app deploy",
    "deploy:cloudrun": "gcloud run deploy chatbot-rag --source .",
    "logs:appengine": "gcloud app logs tail -s default",
    "logs:cloudrun": "gcloud run services logs read chatbot-rag --region=us-central1"
  }
}
```

## Próximos Passos

1. Configure domínio personalizado
2. Implemente CI/CD com GitHub Actions
3. Configure monitoramento avançado
4. Otimize performance com CDN
5. Implemente testes automatizados

Para suporte, consulte a [documentação oficial do Google Cloud](https://cloud.google.com/docs).