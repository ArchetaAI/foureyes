# AGENTS.md: standing rules

- Read docs/decisions/ before starting. Decisions there are binding.
- Read your task brief in docs/tasks/<task-id>.md.
- Work only on the branch task/<task-id>. Create it from main if it doesn't exist.
- Commit on that branch in small, logical commits, with messages in the form "<task-id>: <what changed>". Each commit should build and pass the tests.
- Never push and never publish (no git push, no npm publish). Never merge, rebase, reset or force anything on main or any other branch. The maintainer pushes and merges.
- Never commit secrets, credentials, hidden tests, held-out tasks or reference solutions.
- Never change a public interface, schema or file format a decision defines. If you think one is wrong, stop and write docs/proposals/<task-id>.md explaining why.
- Never read hidden tests, held-out tasks or reference solutions unless your brief says to. Never weaken, skip or delete a test to make it pass.
- Work only on your task. Note other problems in your PR summary instead of fixing them.
- Every change ships with tests. Run the full suite before you finish.
- Finish with a PR summary for the maintainer to paste into the PR: what changed, why, how you tested it, open risks, and any assumption you had to make.
- If you're blocked on a decision, stop and ask. Don't guess.
