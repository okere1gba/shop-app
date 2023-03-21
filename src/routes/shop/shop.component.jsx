import { useContext, Fragment } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../component/context/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  let { categoryMap } = useContext(CategoriesContext);
  // console.log("object:::", categoryMap);
  // console.log("keys:::", Object.keys(categoryMap));

  function selectOnlyArrays(storedataObjects) {
    // const knownArrays = ['jackets', 'mens']
    return {
      Mens: storedataObjects.mens,
      Jackets: storedataObjects.jackets,
      Sneakers: storedataObjects.sneakers,
      Womens: storedataObjects.womens,
    };
    // console.log("first log:::", array_of_keys);
    // let first_key = array_of_keys.mens;
    // console.log("hear:::", first_key);
    // for (let i = 7; i < array_of_keys.length; i++) {
    //   if (Array.isArray(array_of_keys[i])) first_key = array_of_keys[i];
    // }
    // return first_key;
  }

  if (Object.keys(categoryMap).length === 0) return <>laoding...</>;

  const newCategoryMap = selectOnlyArrays(categoryMap);

  return (
    <Fragment>
      {Object.keys(newCategoryMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {newCategoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
