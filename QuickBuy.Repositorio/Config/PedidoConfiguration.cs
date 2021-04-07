using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;

namespace QuickBuy.Repositorio.Config
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(request => request.Id);

            builder.Property(request => request.DataPedido)
                .IsRequired();

            builder.Property(request => request.DataPrevisaoEntrega)
                .IsRequired();

            builder.Property(request => request.CEP)
                .IsRequired()
                .HasMaxLength(10);

            builder.Property(request => request.Cidade)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(request => request.Estado)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(request => request.EnderecoCompleto)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(request => request.NumeroEndereco)
                .IsRequired();

            /*Não há necessidade de configurar no lado pai também, mas se você quiser é assim que faz:*/
            /*builder.HasOne(request => request.User);

            builder.HasOne(request => request.PaymentForm);*/
        }
    }
}
