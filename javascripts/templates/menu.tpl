<ul>
    {{#each fields}}
    <li>
        <h2>{{label}}</h2>
        {{#compare input "===" "check"}}
            {{#indexloop values labels}}
                <label class="form_{{../type}}"><input type="{{../type}}" name="{{../name}}" value="{{value}}">{{label}}</label>
            {{/indexloop}}
        {{/compare}}
        {{#compare input "===" "text"}}
            <input id="field_{{name}}" class="input_{{type}}" type="{{type}}" name="{{name}}">
        {{/compare}}
        {{#compare input "===" "slider"}}
            <label for="field_{{name}}" class="form_{{type}}">{{label}}</label>
            <input id="field_{{name}}" class="input_{{type}}" type="{{type}}" {{#if min}}min={{min}} {{/if}}{{#if max}}max={{max}} {{/if}} name="{{name}}">
        {{/compare}}
    </li>
    {{/each}}
</ul>
