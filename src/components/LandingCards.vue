<template>
  <div>
    <h2 class="text-dark mb-md-12 pt-md-12">Better<span class="text-highlight"> AI </span>Experience with<span class="text-highlight"> Aurorae </span></h2>

    <v-row class="px-md-12 px-2 py-md-12">
      <template v-for="n in 4" :key="n">
        <v-col cols="12" md="6" lg="3">
          <v-card 
            class="card"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="Card headline">
            <template #actions>
              <div class="w-100 d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224.32,114.24a56,56,0,0,0-60.07-76.57A56,56,0,0,0,67.93,51.44a56,56,0,0,0-36.25,90.32A56,56,0,0,0,69,217,56.39,56.39,0,0,0,83.59,219a55.75,55.75,0,0,0,8.17-.61,56,56,0,0,0,96.31-13.78,56,56,0,0,0,36.25-90.32ZM182.85,54.43a40,40,0,0,1,28.56,48c-.95-.63-1.91-1.24-2.91-1.81L164,74.88a8,8,0,0,0-8,0l-44,25.41V81.81l40.5-23.38A39.76,39.76,0,0,1,182.85,54.43ZM144,137.24l-16,9.24-16-9.24V118.76l16-9.24,16,9.24ZM80,72a40,40,0,0,1,67.53-29c-1,.51-2,1-3,1.62L100,70.27a8,8,0,0,0-4,6.92V128l-16-9.24ZM40.86,86.93A39.75,39.75,0,0,1,64.12,68.57C64.05,69.71,64,70.85,64,72v51.38a8,8,0,0,0,4,6.93l44,25.4L96,165,55.5,141.57A40,40,0,0,1,40.86,86.93ZM73.15,201.57a40,40,0,0,1-28.56-48c.95.63,1.91,1.24,2.91,1.81L92,181.12a8,8,0,0,0,8,0l44-25.41v18.48l-40.5,23.38A39.76,39.76,0,0,1,73.15,201.57ZM176,184a40,40,0,0,1-67.52,29.05c1-.51,2-1.05,3-1.63L156,185.73a8,8,0,0,0,4-6.92V128l16,9.24Zm39.14-14.93a39.75,39.75,0,0,1-23.26,18.36c.07-1.14.12-2.28.12-3.43V132.62a8,8,0,0,0-4-6.93l-44-25.4,16-9.24,40.5,23.38A40,40,0,0,1,215.14,169.07Z"></path></svg>
                <v-btn class="ml-auto mr-4 link" text="Find out more >"></v-btn>
              </div>
            </template>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  color: rgb(var(--v-theme-primary));
  margin: 0 10px;
  border: 2px solid rgb(var(--v-theme-primary));
  border-radius: 8px;
}

.link {
  color: rgb(var(--v-theme-secondary))
}

.text-dark {
  color: rgb(var(--v-theme-textDark));
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .text-dark {
    text-align: left;
    padding: 20px 15px;
  }
}

.text-highlight {
  color: rgb(var(--v-theme-secondary));
}
</style>