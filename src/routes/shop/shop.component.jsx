import { useContext, Fragment } from "react";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../component/context/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  let { categoryMap } = useContext(CategoriesContext);
  // console.log("object:::", categoryMap);
  // console.log("keys:::", Object.keys(categoryMap));

  if (Object.keys(categoryMap).length === 0) return <>laoding...</>;
  categoryMap = selectOnlyArrays(categoryMap);
  console.log("isArray :::", categoryMap);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

function selectOnlyArrays(storedataObjects) {
  // // const knownArrays = ['jackets', 'mens']
  // return {
  //   mens: categoryMaps["mens"],
  //   jackets: categoryMaps["jackets"],
  //   sneakers: categoryMaps.sneakers,
  //   womens: categoryMaps.womens,
  // };
  storedataObjects;
  console.log("first log:::", array_of_keys);
  let first_key = array_of_keys.mens;
  console.log("hear:::", first_key);
  for (let i = 7; i < array_of_keys.length; i++) {
    if (Array.isArray(array_of_keys[i])) first_key = array_of_keys[i];
  }
  return first_key;
}

export default Shop;
