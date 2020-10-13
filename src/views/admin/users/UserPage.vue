<template>
  <div>
    <div class="header"></div>
    <div class="responsive_container">
      <HeaderTitle
        title="Users"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eius."
      />
      <div>
        <ag-grid-vue
          style="width: 100%; height: 560px"
          class="ag-theme-alpine"
          :columnDefs="columnDefs"
          :rowData="rowData"
          rowSelection="multiple"
        >
        </ag-grid-vue>
      </div>
    </div>
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import HeaderTitle from "../../../components/header/HeaderTitle";
export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      rowData: null,
    };
  },
  components: {
    AgGridVue,
    HeaderTitle,
  },
  beforeMount() {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true},
      {headerName: 'Model', field: 'model', sortable: true, filter: true },
      {headerName: 'Price', field: 'price', sortable: true, filter: true }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ];
  },
};
</script>