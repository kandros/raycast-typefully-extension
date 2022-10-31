import { Action, ActionPanel, Detail, Icon, List } from "@raycast/api";
import { useThreads } from "./api";
import { Thread } from "./types";

export default function Command() {
  const { isLoading, threads } = useThreads();

  console.log({ isLoading });

  return (
    <List isLoading={isLoading}>
      {threads
        .filter((t) => !t.is_empty)
        .map((t) => {
          return (
            <List.Item
              // subtitle={t.preview.slice(t.text.length)}
              key={t.id}
              title={t.text}
              accessories={[{ text: `${t.num_tweets} Tweets` }]}
              actions={<Actions thread={t} />}
            />
          );
        })}
    </List>
  );
}

function Actions(props: { thread: Thread }) {
  return (
    <ActionPanel>
      {/* {!props.isDetail && ( */}
      <Action.Push icon={Icon.Sidebar} title="Show Details" target={<ThreadDetail thread={props.thread} />} />
      {/* )} */}
      <Action.OpenInBrowser url={"https://google.com"} />
      {/* <Action.CopyToClipboard title="Copy URL" content={props.issue.html_url} /> */}
    </ActionPanel>
  );
}

function ThreadDetail({ thread }: { thread: Thread }) {
  return (
    <Detail
      markdown={thread.text}
      navigationTitle={`Drafts ${thread.id}`}
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="# of Tweets" text={thread.num_tweets.toString()} />
          <Detail.Metadata.Label title="Last edited" text={thread.last_edited} />
          {/* <Detail.Metadata.TagList title="Type">
            <Detail.Metadata.TagList.Item text="Electric" color={"#eed535"} />
          </Detail.Metadata.TagList> */}
          <Detail.Metadata.Separator />
          <Detail.Metadata.Link title="Evolution" target="https://typefully.com" text="Open in Typefully" />
        </Detail.Metadata>
      }
    />
  );
}

function trim(s: string): string {
  return s.slice(0, 40);
}
