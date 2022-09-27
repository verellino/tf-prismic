<template>
  <Bounded>
    <form
      action="/api/contact"
      method="post"
      class="grid grid-cols-1 gap-6 pt-12"
    >
      <h1 class="h2 section-title text-center">Hubungi Kami</h1>
      <InputField label="Name" name="name" placeholder="Nama Lengkap" />
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="email@example.com"
      />
       <label class="label">
        <span class="label-text">Kategori</span>
      </label>
      <select class="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400">
        <option disabled selected>Pilih Kategori</option>
        <option>Partnership</option>
        <option>Business</option>
        <option>Editorial</option>
        <option>Lainnya</option>
      </select>
      <TextareaField
        label="Pesan"
        name="message"
        placeholder="Tulis pesan anda..."
      />
     
      <button
        type="submit"
        class="ml-auto inline-flex items-center gap-2 hover:text-dark-maroon link_underline"
      >
        Kirim Pesan <span aria-hidden="true" class="text-xl">
          &rarr;
        </span>
      </button>
    </form>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context'])
}
</script>
