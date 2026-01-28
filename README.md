# End-to-End Mapping

Docs for how to use HOT's tools in an End-to-End data mapping flow.

> [!NOTE]
> This site was a work in progress to interactively tie together
> the E2E workflow - not only docs, but interactive linkage!
>
> But we didn't get time to fully focus on it.
>
> The project has been superseded by:
> <https://github.com/hotosm/portal>
>
> <https://portal.hotosm.org>

## Installing Components From Other Projects

- If we are using hotosm/ui to build components in other repos.
- Then we can install the repo:
  `pnpm install git+https://github.com/hotosm/field-tm#main&path:src/frontend`
- And import the components to use from that repo:
  `import SomeButton from 'field-tm/src/components/some-button.ts`
