<script lang="ts" setup>
const { to, external, target } = defineProps<{
    to: string;
    external?: boolean;
    target?: "_blank";
}>();
const path = external ? to : useLocalePath()(to);
</script>
<template>
    <NuxtLinkLocale
        :to="path"
        :external="external"
        :target="target"
        rel="noreferrer"
        class="text-crimson underline"
    >
        <slot />
    </NuxtLinkLocale>
</template>
