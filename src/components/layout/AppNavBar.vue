<template>
  <v-app-bar
    app  
    color="primary"
    collapse-on-scroll>
    <!-- Logo und Titel -->
    <v-row 
      align="center" 
      class="ml-4 pt-2 d-none d-sm-flex">
      <a 
        href="/" 
        class="position-absolute">
        <img 
          src="../../assets/Logo.svg" 
          alt="Anwendugslogo">
      </a>
    </v-row>

    <!-- Navigationselemente -->
    <v-spacer class="d-none d-md-block" />
    <v-container class="d-flex justify-center link-container">
      <div class="d-none d-lg-flex justify-center position-relative w-screen ml-15">
        <template 
          v-for="(link, idx) in links" 
          :key="`${link.href}-${idx}`">
          <a :href="link.href">
            <v-btn
              :text="`${link.label}`" 
              class="mr-8 ml-16 link" />
          </a>
        </template>
      </div>
    </v-container>
    <v-spacer class="d-none d-md-block" />

    <!-- Rechtsausgerichtete Elemente -->
    <v-btn 
      size="large"
      href="/signin"
      class="mr-4 text-white border-t-lg border-b-lg border-info"
      text="sign in" />
    <MobileMenu :links="links" />
  </v-app-bar>
</template>

<script setup lang="ts">
type LinkElement = {
  href: string, 
  label: string
}
const links: LinkElement[] = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/products', label: 'Products' },
  { href: '/wiki', label: 'Wiki' }
]
</script>