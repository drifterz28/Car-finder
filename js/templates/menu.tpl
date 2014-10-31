<div class="js-fixed fixed_button">
    <button class="form_submit button expand" type="submit">Submit</button>
</div>
<ul>
    {{#each fields}}
    <li>
        <h3>{{label}}</h3>
        {{#compare input "===" "check"}}
            {{#indexloop values labels}}
                <label class="form_{{../type}}"><input type="{{../type}}" name="{{../name}}" value="{{value}}">{{label}}</label>
            {{/indexloop}}
        {{/compare}}
        {{#compare input "===" "text"}}
            {{#if labels}}
                {{#indexloop values labels}}
                    <div class="row">
                        <div class="small-3 columns">
                            <label for="field_{{name}}" class="form_{{../type}} inline text-right">{{label}}</label>
                        </div>
                        <div class="small-9 columns">
                            <input id="field_{{name}}" class="input_{{../type}}" type="{{../type}}" name="{{../name}}" value="{{value}}">
                        </div>
                    </div>
                {{/indexloop}}
            {{else}}
                <input id="field_{{name}}" class="input_{{type}}" type="{{type}}" name="{{name}}">
            {{/if}}
        {{/compare}}
    </li>
    {{/each}}
</ul>
