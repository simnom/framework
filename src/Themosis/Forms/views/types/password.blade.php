<label for="{{ $__field->getAttribute('id') }}">{{ $__field->getOptions('label') }}</label>
<input type="password" name="{{ $__field->getName() }}" {!! $__field->attributes($__field->getAttributes()) !!}>
