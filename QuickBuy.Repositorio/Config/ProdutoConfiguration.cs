using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class ProdutoConfiguration : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder.HasKey(product => product.Id);

            builder.Property(product => product.Nome)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(product => product.Descricao)
                .IsRequired()
                .HasMaxLength(400);

            builder.Property(product => product.Preco)
                .HasColumnType("decimal(19,4)")
                .IsRequired();
        }
    }
}
