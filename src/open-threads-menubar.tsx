import { MenuBarExtra, open } from "@raycast/api";
import { useThreads } from "./api";

export default function Command() {
  const { isLoading, threads } = useThreads();

  return (
    <MenuBarExtra icon="favicon.ico" isLoading={isLoading}>
      <MenuBarExtra.Section title={`${threads.length} thread drafts`} /* onAction={() => open(issue.html_url)}  */>
        {threads
          .filter((t) => !t.is_empty)
          .map((t) => {
            return (
              <MenuBarExtra.Section key={t.id}>
                <MenuBarExtra.Item title={t.preview} onAction={() => open("https://typefully.com/write")} />
              </MenuBarExtra.Section>
            );
          })}
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
