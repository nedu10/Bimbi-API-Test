/*
|--------------------------------------------------------------------------
| Caregory Routes
|--------------------------------------------------------------------------
*/

import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post(
    "/create-product-category",
    "Category/ProductcategoriesController.create_product_category"
  );
  Route.get(
    "/product-category",
    "Category/ProductcategoriesController.get_product_category"
  );
  Route.get(
    "/product-category/:category_id",
    "Category/ProductcategoriesController.get_single_product_category"
  );
  Route.put(
    "/update-product-category/:category_id",
    "Category/ProductcategoriesController.update_product_category"
  );
  Route.delete(
    "/delete-product-category/:category_id",
    "Category/ProductcategoriesController.delete_product_category"
  );
}).prefix("/api/v1/category");
