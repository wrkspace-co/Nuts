# Auto-updater on Windows

Nuts provides a backend for the [Squirrel.Windows](https://github.com/Squirrel/Squirrel.Windows) auto-updater.

Refer to the [Squirrel.Windows documentation](https://github.com/Squirrel/Squirrel.Windows/tree/master/docs) on how to setup your application.

Nuts will serve NuGet packages on `http://download.myapp.com/update/win32/:version/RELEASES`.

Your application just need to configure `Update.exe` or `Squirrel.Windows` to use `http://download.myapp.com/update/win32/:version` as a feed url (:warning: without query parameters).

Updates are fetched from the `stable` channel by default. To update from a
specific channel (like `beta`), use the endpoint
`http://download.myapp.com/update/channel/<channel>/win32/:version`.

You'll just need to upload as release assets: `RELEASES`, `*-delta.nupkg` and `-full.nupkg` (files generated by `Squirrel.Windows` releaser).
