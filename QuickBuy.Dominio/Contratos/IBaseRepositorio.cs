using System;

namespace QuickBuy.Dominio.Contratos
{
    public interface IBaseRepositorio<TEntity> : IDisposable where TEntity: class
    {
        void Adicionar(TEntity entity);

        TEntity ObterPorId(int id);

        IENumerable<TEntity> ObterTodos();
        void Atualizar(TEntity entity);
        void Remover(TEntity entity);
    }
}
