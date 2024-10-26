# DYNAMIC PROGRAMMING

## Integrantes da Equipe

|         Nome                  |  RM    |
|-------------------------------|--------|
|André Coelho Solér             |98827   |
|Eduardo Gomes Pinho Junior     |97919   |
|Gustavo Ferreira Lopes         |98887   |
|Leonardo Viotti Bonin          |551716  |


# Análise de Desempenho em Treinamento Cirúrgico com Realidade Virtual

## Descrição
Este projeto tem como objetivo analisar o desempenho de alunos em um programa de treinamento cirúrgico utilizando realidade virtual. Os dados, coletados através de um jogo de realidade aumentada/virtual, são extraídos de um banco de dados e armazenados em um arquivo JSON em um servidor FTP. 

## Tecnologias Utilizadas
* **Python:** Linguagem principal para desenvolvimento e análise.
* **pandas:** Biblioteca para manipulação e análise de dados.
* **matplotlib:** Biblioteca para criação de visualizações.
* **ftplib:** Módulo para interação com servidores FTP.
* **json:** Módulo para manipulação de dados no formato JSON.

## Funcionamento
1. **Coleta de Dados:** Os dados são extraídos do banco de dados e armazenados em um arquivo JSON no servidor FTP.
2. **Download e Preparação:** O script Python conecta-se ao servidor FTP, baixa o arquivo JSON e o carrega em um DataFrame do pandas.
3. **Análise:** São realizadas diversas análises nos dados, como cálculo de médias, desvios padrão e agrupamentos.
4. **Visualização:** Os resultados da análise são apresentados em gráficos gerados com matplotlib.

## Como Executar
1. **Pré-requisitos:**
   * Python e as bibliotecas pandas, matplotlib e ftplib instaladas.
   * Um ambiente virtual (recomendado).
2. **Clonagem do Repositório:**
   ```bash
   git clone https://github.com/edunotorious/challenge-2024-next-group.git