namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionaCritica("Falta a inserção do nome.");
            if (Preco == 0)
                AdicionaCritica("Falta a definição do preço.");
        }
    }
}