<template>
  <div>
    <div class="container flex p-4 py-12 sm:flex-row md:px-12">
      <ul class="m-4 w-1/2 border p-4">
        <h2 class="section-title text-center">Mentor Public Sector</h2>
        <MentorItem
          v-for="mentor in mentorPublic"
          :key="mentor.id"
          :mentor="mentor"
        />
        <a href="https://forms.gle/z9byuyAr3eSBjhyJ8"
          class="w-full mx-auto mt-8 rounded-md bg-maroon px-4 py-2 text-xs text-white"
        >
          <span>Ingin jadi mentee? Daftar di sini</span>
        </a>
      </ul>
      <ul class="m-4 w-1/2 border p-4">
        <h2 class="section-title text-center">Mentor Private Sector</h2>
        <MentorItem
          v-for="mentor in mentorPrivate"
          :key="mentor.id"
          :mentor="mentor"
        />
        <a href="https://forms.gle/xmu35RckGbTjXMyB6"
          class="w-full mx-auto mt-8 rounded-md bg-maroon px-4 py-2 text-xs text-white"
        >
          <span>Ingin jadi mentee? Daftar di sini</span>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mentorPrivate: {
      type: Array,
      required: true,
    },
    mentorPublic: {
      type: Array,
      required: true,
    },
  },
};
</script>