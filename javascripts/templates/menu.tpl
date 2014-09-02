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
            {{#if labels}}
                {{#indexloop values labels}}
                    <label class="form_{{../type}}"><input type="{{../type}}" name="{{../name}}" value="{{value}}">{{label}}</label>
                {{/indexloop}}
            {{else}}
                <input id="field_{{name}}" class="input_{{type}}" type="{{type}}" name="{{name}}">
            {{/if}}
        {{/compare}}
    </li>
    {{/each}}
    <li>
        <button class="form_submit" type="submit">Submit</button>
    </li>
</ul>
