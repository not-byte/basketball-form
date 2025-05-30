<script lang="js" setup>
const { Stage, stage, data, errors, set } = useStageManager();
</script>

<template>
    <h2 class="text-center">
        <span>{{ stage }}/3</span>
        {{ $t(`pages.index.content.summary.title`) }}
    </h2>

    <i18n-t
        tag="p"
        keypath="pages.index.content.summary.description"
        scope="global"
        class="text-justify"
    >
        <template #messenger>
            <TextLink
                external
                target="_blank"
                to="https://www.facebook.com/knury.knurow"
            >
                {{ $t(`pages.index.content.summary.messenger`) }}
            </TextLink>
        </template>
        <template v-slot:instagram>
            <TextLink
                external
                target="_blank"
                to="https://www.instagram.com/knury.knurow"
            >
                {{ $t(`pages.index.content.summary.instagram`) }}
            </TextLink>
        </template>
    </i18n-t>

    <h3 class="text-left">
        {{ $t(`pages.index.content.summary.subtitle.team`) }}
    </h3>
    <ul class="w-full">
        <li>
            <p class="flex justify-between">
                1.1
                {{ $t(`components.input.team.name`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.team.name
                            ? $t(`components.input.fill`)
                            : `${data.team.name.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.2
                {{ $t(`components.select.category.0`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.team.category
                            ? $t(`components.input.fill`)
                            : `${$t(`components.select.category.${data.team.category}`).substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.3
                {{ $t(`components.input.team.email`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.team.email
                            ? $t(`components.input.fill`)
                            : `${data.team.email.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
        <li>
            <p class="flex justify-between">
                1.4
                {{ $t(`components.input.team.phone`) }}
                <span
                    @click="set(Stage.TEAM)"
                    class="text-crimson underline hover:cursor-pointer"
                >
                    {{
                        !data.team.phone
                            ? $t(`components.input.fill`)
                            : `${data.team.phone.substring(0, 7)}...`
                    }}
                </span>
            </p>
        </li>
    </ul>

    <h3 class="text-left">
        {{ $t(`pages.index.content.summary.subtitle.players`) }}
    </h3>
    <ul class="w-full">
        <li
            v-for="(player, number) in data.players"
            :key="number"
            class="flex justify-between"
        >
            <template
                v-if="
                    number === 3 &&
                    !player.first_name &&
                    !player.last_name &&
                    !player.age
                "
            >
                4. {{ $t(`pages.index.content.summary.bench`) }}
                <span
                    class="text-crimson underline hover:cursor-pointer"
                    @click="set(Stage.PLAYERS)"
                >
                    {{ $t(`components.input.add`) }}
                </span>
            </template>

            <template v-else>
                {{ number + 1 }}.
                {{
                    player.first_name ||
                    $t(`components.input.player.first_name`)
                }}
                {{
                    player.last_name || $t(`components.input.player.last_name`)
                }}
                - {{ player.age || $t(`components.input.player.age`) }}
                <span
                    class="text-crimson underline hover:cursor-pointer"
                    @click="set(Stage.PLAYERS)"
                >
                    {{ $t(`components.input.fill`) }}
                </span>
            </template>
        </li>
    </ul>

    <fieldset class="w-full flex flex-col gap-2 items-end justify-end">
        <section class="w-full flex gap-2 items-center justify-end">
            <input
                v-model="data.accepted"
                type="checkbox"
                name="accept"
                required
                class="accent-crimson"
            />
            <i18n-t
                tag="span"
                keypath="components.input.submit"
                scope="global"
                class="text-sm text-right"
            >
                <template v-slot:regulations>
                    <TextLink to="files/regulamin" target="_blank" external>
                        {{
                            $t(`pages.index.content.start.regulations`)
                                .split(" ", 1)
                                .at(0)
                        }}
                    </TextLink>
                </template>
            </i18n-t>
        </section>

        <TextImportant v-if="errors.accepted" class="text-sm text-right">
            {{ $t(`requirements.regulations`) }}
        </TextImportant>
    </fieldset>
</template>
