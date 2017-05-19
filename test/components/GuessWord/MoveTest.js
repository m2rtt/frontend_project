import React from 'react';
import {render, shallow} from 'enzyme';

import Move from '../../../src/components/GuessWord/Move';

describe('GuessNumber/Move', () => {
  it('shows "Sending move" when move status is sending', () => {
    expect(shallow(<Move move='paper' status='sending'/>).text())
      .to.contain('Sending move');
  });

  it('has correct letters when correct guess', () => {
    const result = render(
      <Move
        move='paper'
        letterMatches={[true, true, true, true, true]}
        correct={true}
        status='sent'
      />);
    expect(result.html()).to.eql(
        '<div class="move correct">' +
          '<span class="letter correct">p</span>' +
          '<span class="letter correct">a</span>' +
          '<span class="letter correct">p</span>' +
          '<span class="letter correct">e</span>' +
          '<span class="letter correct">r</span>' +
        '</div>'
    );
  });

  it('has incorrect class when guess was incorrect', () => {
    const result = render(
      <Move
        move='pipe'
        letterMatches={[true, false, true, true]}
        correct={false}
        status='sent'
      />);
    expect(result.html()).to.eql(
        '<div class="move incorrect">' +
          '<span class="letter correct">p</span>' +
          '<span class="letter incorrect">i</span>' +
          '<span class="letter correct">p</span>' +
          '<span class="letter correct">e</span>' +
        '</div>'
    );
  });
});
