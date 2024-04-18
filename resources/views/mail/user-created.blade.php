<x-mail::message>
# Welcome {{ $name }}

An account was created for you to enter {{ config('app.url') }}.

Your password is: {{ $password }}

<x-mail::button :url="config('app.url')">
View Website
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
