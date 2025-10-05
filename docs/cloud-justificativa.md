# Infraestrutura Cloud – Escolha e Justificativa

**Cloud escolhida:** Amazon Web Services (AWS)

---

## 🧠 Justificativa da Escolha

A AWS foi escolhida por oferecer o ecossistema mais completo e maduro de serviços em nuvem, com alta disponibilidade, escalabilidade e ampla documentação. É a solução ideal para projetos acadêmicos e profissionais que exigem flexibilidade, baixo custo inicial e crescimento progressivo.

### Principais Motivos:

1. **Amplitude de serviços:** cobre toda a stack — EC2/Fargate (computação), RDS (banco de dados), S3 (armazenamento), CloudWatch (monitoramento) e ELB (balanceamento).  
2. **Escalabilidade sob demanda:** ajusta recursos automaticamente conforme a carga.  
3. **Modelo pay-as-you-go:** o custo acompanha o uso real, ideal para projetos acadêmicos.  
4. **Alta disponibilidade e segurança:** múltiplas zonas de disponibilidade e recursos de compliance.  
5. **Ecossistema e suporte:** documentação extensa e grande comunidade no Brasil.

---

## ⚖️ Comparativo com Outras Clouds

| Critério                 | **AWS** | **Azure** | **GCP** |
|---------------------------|:-------:|:----------:|:-------:|
| Variedade de serviços     | 🟢 Alta | 🟢 Alta | 🟡 Média |
| Documentação e suporte    | 🟢 Excelente | 🟢 Boa | 🟢 Boa |
| Facilidade de uso inicial | 🟢 Alta | 🟡 Média | 🟢 Alta |
| Custo inicial             | 🟢 Baixo (free tier amplo) | 🟢 Baixo | 🟢 Baixo |
| Popularidade no Brasil    | 🟢 Alta | 🟡 Média | 🟡 Média |

> **Conclusão:** a AWS equilibra custo, confiabilidade e documentação, sendo a melhor opção para esta prática.

---

## ⚙️ Stack Utilizada (Proposta)

- **Compute:** AWS Fargate ou EC2 (containers)  
- **Banco de Dados:** Amazon RDS (PostgreSQL)  
- **Armazenamento:** Amazon S3 (arquivos e imagens)  
- **Rede:** Elastic Load Balancer (distribuição de carga)  
- **Observabilidade:** CloudWatch (logs, métricas e alarmes)

---

**Autor:** Lucas Schwertz  
**Disciplina:** Práticas Extensionistas IV  
**Professor:** Jean Carlos Hennrichs  
**Instituição:** UNOESC
