<template>
   <div class="container text-center py-32 px-4 md:px-16">
        <h2>Kontak </h2>
        <form action="#" method="POST">
          <div class="overflow-hidden sm:rounded-md text-left mt-8">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nama Lengkap</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 h-12 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 h-12 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Lorem</label
                  >
                  <input
                    type="text"
                    name="lorem"
                    id="lorem"
                    autocomplete="lorem"
                    class="mt-1 h-72 px-4 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-2 border-gray-500 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                class="inline-flex w-1/2 justify-center py-4 px-8 border border-transparent shadow-sm font-medium rounded-md text-white bg-dark-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>