export default function ButtonList({ categories, filterCategory }) {
  return (
    <>
      <div className='ButtonCategories'>
        {categories && categories.length > 0 ? categories.map(category => (
          <button
            type='button'
            className='ButtonListContainer btn-category'
            onClick={() => filterCategory(category)}
            key={category}
          >
            {category}
          </button>
        )) : <p>Loading...</p>}
      </div>
      <style jsx>{`
        .ButtonCategories
        {
          display: flex;
          gap: 10px;
        }
        .ButtonListContainer
        {
            display: flex;
            width: 100%;
            padding: 10px;
            cursor: pointer;
            border: none;
            border-radius: 10px;
            justify-content: center;
            font-size: 12px;
            {/* background: var(--light-grey); */}
            background: var(--manantial-color);
            color: var(--secondary-color);
            transition: 0.6s;
        }
        .ButtonListContainer:hover
        {
          background: var(--secondary-color);
          color: var(--primary-color)
        }
      `}</style>
    </>
  );
};
