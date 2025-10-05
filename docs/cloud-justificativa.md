# Infraestrutura Cloud – Escolha e Justificativa

**Cloud escolhida:** Amazon Web Services (AWS)

---

## 🧠 Justificativa da Escolha

A AWS foi escolhida por oferecer o ecossistema mais completo e maduro de serviços em nuvem, com alta disponibilidade, escalabilidade e ampla documentação. É a solução mais adequada para projetos acadêmicos e profissionais que exigem flexibilidade, baixo custo inicial e crescimento progressivo.

### Principais Motivos:

1. **Amplitude de serviços:** A AWS cobre toda a stack necessária — computação (EC2, Fargate), banco de dados (RDS), armazenamento (S3), monitoramento (CloudWatch) e balanceamento de carga (ELB).  
2. **Escalabilidade sob demanda:** Permite aumentar ou reduzir recursos automaticamente conforme o uso.  
3. **Modelo de cobrança Pay-as-you-go:** O custo acompanha o consumo real, ideal para projetos acadêmicos.  
4. **Alta disponibilidade e segurança:** Recursos distribuídos em múltiplas zonas de disponibilidade.  
5. **Ecossistema e suporte:** Maior comunidade, materiais didáticos e exemplos disponíveis.  

---

## ⚖️ Comparativo com Outras Clouds

| Critério                 | **AWS** | **Azure** | **Google Cloud (GCP)** |
|---------------------------|:-------:|:----------:|:----------------------:|
| Variedade de serviços     | 🟢 Alta | 🟢 Alta | 🟡 Média |
| Documentação e suporte    | 🟢 Excelente | 🟢 Boa | 🟢 Boa |
| Facilidade de uso inicial | 🟢 Alta | 🟡 Média | 🟢 Alta |
| Custo inicial             | 🟢 Baixo (free tier amplo) | 🟢 Baixo | 🟢 Baixo |
| Popularidade no Brasil    | 🟢 Alta | 🟢 Média | 🟡 Média |

> **Conclusão:** A AWS foi escolhida por equilibrar custo, disponibilidade e documentação.  
> As alternativas Azure e GCP são igualmente robustas, mas a AWS apresenta melhor suporte e flexibilidade para protótipos acadêmicos.

---

## ⚙️ Stack Utilizada (Proposta)

- **Compute:** AWS Fargate ou EC2 (containers)  
- **Banco de Dados:** Amazon RDS (PostgreSQL)  
- **Armazenamento:** Amazon S3 (documentos e mídias)  
- **Rede:** Elastic Load Balancer (distribuição de carga)  
- **Observabilidade:** CloudWatch (logs, métricas e alarmes)  

---

**Autor:** Lucas Schwertz  
**Disciplina:** Práticas Extensionistas IV  
**Professor:** Jean Carlos Hennrichs  
**Instituição:** UNOESC  
