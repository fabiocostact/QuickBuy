using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    class Usuario
    {
        public int Id { get; set; }
        public string Emal { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }

        /// <summary>
        /// Um usuário pode ter nenhum ou muitos pedidos
        /// </summary>

        public ICollection<Pedido> Pedidos   { get; set; }

    }
}
