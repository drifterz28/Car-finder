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
            <label class="form_{{type}}">{{label}}<input type="{{type}}" name="{{name}}"></label>
        {{/compare}}
        {{#compare input "===" "slider"}}
            <label class="form_{{type}}">{{label}}<input type="{{type}}" {{#if min}}min={{min}} {{/if}}{{#if max}}max={{max}} {{/if}} name="{{name}}"></label>
        {{/compare}}
    </li>
    {{/each}}
</ul>
