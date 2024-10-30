<script setup>
const items = [
  { link: "/", label: "Home", icon: "mdi-home" },
  { link: "dashboard", label: "Dashboard", icon: "mdi-view-dashboard" },
  { link: "transaction", label: "Transaction", icon: "mdi-swap-horizontal" },
  { link: "Table", label: "Tables", icon: "mdi-table-furniture" },
];
</script>
<template>
  <v-navigation-drawer permanent app width="100">
    <v-list class="d-flex justify-center">
      <v-list-item>
        <v-avatar color="surface-variant"></v-avatar>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense class="d-flex flex-column align-center justify-center">
      <v-list-item
        v-for="item in items"
        link
        :href="item.link"
        class="menu-item"
      >
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="menu-text">{{
          item.label
        }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-btn block>
        <v-icon color="white" size="large">mdi-cog-outline</v-icon>
      </v-btn>
      <v-divider />
      <v-btn block>
        <v-icon color="white" size="large">mdi-logout</v-icon>
      </v-btn>
    </template>
  </v-navigation-drawer>
  <v-main>
    <slot></slot>
  </v-main>
</template>

<style scoped>
.menu-item {
  width: 100%;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
}

.menu-text {
  color: #b0b0b8;
  font-size: 12px;
}
</style>
