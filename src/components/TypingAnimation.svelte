<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        text: string;
        speed?: number;
    }

    const { text, speed = 300 }: Props = $props();

    let printed = $state<string>("");
    let idx = $state<number>(0);

    let interval: NodeJS.Timeout;
    onMount(() => {
        interval = setInterval(() => {
            printed += text[idx];
            idx++;
        }, speed);
    });

    $effect(() => {
        if (idx >= text.length) {
            clearInterval(interval);
        }
    });

    // INFO: не нужно, так как интервал очищается после того, как все распечатет
    // onDestroy(() => clearInterval(interval));
</script>

<p>{printed}</p>
