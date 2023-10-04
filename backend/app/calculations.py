def calcular_ganhos_debentures(principal, taxa_de_juros, periodo):
    # Converte a taxa de juros de porcentagem para decimal
    taxa_de_juros_decimal = taxa_de_juros / 100.0

    # Calcula o montante após o período de investimento
    montante = principal * (1 + taxa_de_juros_decimal) ** periodo

    # Calcula o ganho total subtraindo o principal do montante
    ganho_total = montante - principal

    return ganho_total

# Exemplo de uso:
principal = 10000  # Valor inicial
taxa_de_juros = 5.0  # Taxa de juros anual (5% ao ano)
periodo = 5  # Período de investimento em anos

ganho = calcular_ganhos_debentures(principal, taxa_de_juros, periodo)
print(f"Ganho total após {periodo} anos: R$ {ganho:.2f}")
