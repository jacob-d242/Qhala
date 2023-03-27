<template>
  <header class="flex bg-blue-800">
    <nav class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div>
        <ul class="relative flex flex-row h-16 items-center justify-between">
          <li
            v-for="(item, index) in navigation"
            :key="index"
            :class="{ current: item.current }"
          >
            <button class="rounded px-2 pl-4 ml-4 items-center bg-white"><a href="">{{ item.name }}</a></button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        { name: "Dashboard", href: "#", current: true },
        { name: "Team", href: "#", current: false },
        { name: "Projects", href: "#", current: false },
        { name: "Calendar", href: "#", current: false },
      ],
    };
  },
};
</script>
