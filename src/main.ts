import { MouseCursor, CursorBench, CursorLibrary } from 'cursor-park';

MouseCursor.define();
CursorBench.define();
CursorLibrary.define();

function record() {
  let lastTime: number;
  let repeat = false;
  const events: { action?: string; x?: number; delay: number }[] = [];

  window.addEventListener('keydown', (e) => {
    if (lastTime === undefined) {
      lastTime = 0;
    }
    if (repeat) return;
    else repeat = true;
    console.log(e.key);

    const now = performance.now();
    let action;
    let x;
    if (e.key === 'ArrowDown') {
      action = 'sitting-backwards';
    } else if (e.key === 'ArrowUp') {
      action = 'sitting-forwards';
    } else if (e.key === 'ArrowLeft') {
      x = -2;
    } else if (e.key === 'ArrowRight') {
      x = 2;
    } else if (e.key === 'Enter') {
      console.log(events);
    }

    if (action || x) {
      events.push({
        action,
        x,
        delay: now - lastTime,
      });
      lastTime = now;
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const now = performance.now();
      events.push({
        action: 'sitting',
        delay: now - lastTime,
      });
      lastTime = now;
      repeat = false;
    }
  });
}

let step = 0;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const me = document.querySelector<'mouse-cursor'>('mouse-cursor#me' as any)!;
const choreo = [
  {
    x: -2,
    delay: 305.80000000447035,
  },
  {
    action: 'sitting',
    delay: 137.69999999552965,
  },
  {
    action: 'sitting-forwards',
    delay: 1135.3000000044703,
  },
  {
    action: 'sitting',
    delay: 544,
  },
  {
    action: 'sitting-backwards',
    delay: 498.29999999701977,
  },
  {
    action: 'sitting',
    delay: 666.3999999985099,
  },
  {
    action: 'sitting-forwards',
    delay: 543.4000000059605,
  },
  {
    action: 'sitting',
    delay: 614.2999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 561.5,
  },
  {
    action: 'sitting',
    delay: 792.1000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 887,
  },
  {
    action: 'sitting',
    delay: 614.3999999985099,
  },
  {
    action: 'sitting-backwards',
    delay: 452.5,
  },
  {
    action: 'sitting',
    delay: 721.2000000029802,
  },
  {
    action: 'sitting-forwards',
    delay: 533.0999999940395,
  },
  {
    action: 'sitting',
    delay: 647.6000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 526.3999999985099,
  },
  {
    action: 'sitting',
    delay: 740.4000000059605,
  },
  {
    action: 'sitting-forwards',
    delay: 504,
  },
  {
    action: 'sitting',
    delay: 629.7999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 573.5,
  },
  {
    action: 'sitting',
    delay: 733.8999999985099,
  },
  {
    action: 'sitting-forwards',
    delay: 454,
  },
  {
    action: 'sitting',
    delay: 705.8000000044703,
  },
  {
    action: 'sitting-backwards',
    delay: 508.29999999701977,
  },
  {
    action: 'sitting',
    delay: 779.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 429.20000000298023,
  },
  {
    action: 'sitting',
    delay: 652.3999999985099,
  },
  {
    action: 'sitting-backwards',
    delay: 485.20000000298023,
  },
  {
    action: 'sitting',
    delay: 802.1000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 532.2999999970198,
  },
  {
    action: 'sitting',
    delay: 658.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 504.3999999985099,
  },
  {
    action: 'sitting',
    delay: 669.8999999985099,
  },
  {
    action: 'sitting-forwards',
    delay: 458.8999999985099,
  },
  {
    action: 'sitting',
    delay: 678.4000000059605,
  },
  {
    action: 'sitting-backwards',
    delay: 492.59999999403954,
  },
  {
    action: 'sitting',
    delay: 698.4000000059605,
  },
  {
    action: 'sitting-forwards',
    delay: 429.8999999985099,
  },
  {
    action: 'sitting',
    delay: 686.2999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 524.6000000014901,
  },
  {
    action: 'sitting',
    delay: 719.5,
  },
  {
    action: 'sitting-forwards',
    delay: 599.7000000029802,
  },
  {
    action: 'sitting',
    delay: 529.5,
  },
  {
    action: 'sitting-backwards',
    delay: 479.3999999985099,
  },
  {
    action: 'sitting',
    delay: 545.6999999955297,
  },
  {
    action: 'sitting-forwards',
    delay: 437.40000000596046,
  },
  {
    action: 'sitting',
    delay: 576.2999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 592,
  },
  {
    action: 'sitting',
    delay: 596.1000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 518.7999999970198,
  },
  {
    action: 'sitting',
    delay: 537.8999999985099,
  },
  {
    action: 'sitting-backwards',
    delay: 519.5,
  },
  {
    action: 'sitting',
    delay: 612.4000000059605,
  },
  {
    x: 2,
    delay: 992.5999999940395,
  },
  {
    action: 'sitting',
    delay: 165.70000000298023,
  },
  {
    x: 2,
    delay: 1094.8999999985099,
  },
  {
    action: 'sitting',
    delay: 191.89999999850988,
  },
  {
    x: 2,
    delay: 1025,
  },
  {
    action: 'sitting',
    delay: 200.20000000298023,
  },
  {
    action: 'sitting-forwards',
    delay: 983.3999999985099,
  },
  {
    action: 'sitting',
    delay: 910.8999999985099,
  },
  {
    action: 'sitting-backwards',
    delay: 382.80000000447035,
  },
  {
    action: 'sitting',
    delay: 805.6000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 436.59999999403954,
  },
  {
    action: 'sitting',
    delay: 677.8000000044703,
  },
  {
    action: 'sitting-backwards',
    delay: 463.19999999552965,
  },
  {
    action: 'sitting',
    delay: 702.8000000044703,
  },
  {
    action: 'sitting-forwards',
    delay: 432.79999999701977,
  },
  {
    action: 'sitting',
    delay: 654.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 660.2000000029802,
  },
  {
    action: 'sitting',
    delay: 598.1999999955297,
  },
  {
    action: 'sitting-forwards',
    delay: 455,
  },
  {
    action: 'sitting',
    delay: 569.7000000029802,
  },
  {
    action: 'sitting-backwards',
    delay: 754.1999999955297,
  },
  {
    action: 'sitting',
    delay: 595.1000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 456.6000000014901,
  },
  {
    action: 'sitting',
    delay: 621.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 547.3999999985099,
  },
  {
    action: 'sitting',
    delay: 864.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 727.4000000059605,
  },
  {
    action: 'sitting',
    delay: 593.6999999955297,
  },
  {
    action: 'sitting-backwards',
    delay: 475.5,
  },
  {
    action: 'sitting',
    delay: 610.5,
  },
  {
    action: 'sitting-forwards',
    delay: 517.7000000029802,
  },
  {
    action: 'sitting',
    delay: 633.6000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 538.2999999970198,
  },
  {
    action: 'sitting',
    delay: 740.6000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 497.19999999552965,
  },
  {
    action: 'sitting',
    delay: 635.2000000029802,
  },
  {
    action: 'sitting-backwards',
    delay: 439,
  },
  {
    action: 'sitting',
    delay: 761.2000000029802,
  },
  {
    action: 'sitting-forwards',
    delay: 382.79999999701977,
  },
  {
    action: 'sitting',
    delay: 787.6000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 372.5,
  },
  {
    action: 'sitting',
    delay: 777.7999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 290.30000000447035,
  },
  {
    action: 'sitting',
    delay: 761.7999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 315.79999999701977,
  },
  {
    action: 'sitting',
    delay: 693.1000000014901,
  },
  {
    action: 'sitting-forwards',
    delay: 300.80000000447035,
  },
  {
    action: 'sitting',
    delay: 873.2999999970198,
  },
  {
    action: 'sitting-backwards',
    delay: 310.1000000014901,
  },
  {
    action: 'sitting',
    delay: 691.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 290.6000000014901,
  },
  {
    action: 'sitting',
    delay: 774.5,
  },
  {
    action: 'sitting-backwards',
    delay: 484.29999999701977,
  },
  {
    action: 'sitting',
    delay: 434.1000000014901,
  },
  {
    x: 2,
    delay: 418.80000000447035,
  },
  {
    action: 'sitting',
    delay: 133.59999999403954,
  },
  {
    x: 2,
    delay: 946.3000000044703,
  },
  {
    action: 'sitting',
    delay: 150.29999999701977,
  },
  {
    x: -2,
    delay: 710.3999999985099,
  },
  {
    action: 'sitting',
    delay: 149.80000000447035,
  },
  {
    x: -2,
    delay: 1634.6999999955297,
  },
  {
    action: 'sitting',
    delay: 142.20000000298023,
  },
  {
    action: 'sitting-backwards',
    delay: 916.2000000029802,
  },
  {
    action: 'sitting',
    delay: 721.8999999985099,
  },
  {
    action: 'sitting-forwards',
    delay: 351.8999999985099,
  },
  {
    action: 'sitting',
    delay: 653.8999999985099,
  },
  {
    action: 'sitting-backwards',
    delay: 441.1000000014901,
  },
  {
    action: 'sitting',
    delay: 746.5,
  },
  {
    action: 'sitting-forwards',
    delay: 254.39999999850988,
  },
  {
    action: 'sitting',
    delay: 707.2000000029802,
  },
  {
    action: 'sitting-backwards',
    delay: 285.1000000014901,
  },
  {
    action: 'sitting',
    delay: 762.5,
  },
  {
    action: 'sitting-forwards',
    delay: 296.29999999701977,
  },
  {
    action: 'sitting',
    delay: 562.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 312.79999999701977,
  },
  {
    action: 'sitting',
    delay: 595.8000000044703,
  },
  {
    action: 'sitting-forwards',
    delay: 310.5,
  },
  {
    action: 'sitting',
    delay: 481.79999999701977,
  },
  {
    action: 'sitting-backwards',
    delay: 506.5,
  },
  {
    action: 'sitting',
    delay: 574,
  },
  {
    action: 'sitting-forwards',
    delay: 357.8999999985099,
  },
  {
    action: 'sitting',
    delay: 519.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 386.1000000014901,
  },
  {
    action: 'sitting',
    delay: 587.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 284.20000000298023,
  },
  {
    action: 'sitting',
    delay: 486.5,
  },
  {
    action: 'sitting-backwards',
    delay: 377.5,
  },
  {
    action: 'sitting',
    delay: 608.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 388.8999999985099,
  },
  {
    action: 'sitting',
    delay: 438.1000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 394.70000000298023,
  },
  {
    action: 'sitting',
    delay: 565.2999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 368.3999999985099,
  },
  {
    action: 'sitting',
    delay: 485.90000000596046,
  },
  {
    action: 'sitting-backwards',
    delay: 397.8999999985099,
  },
  {
    action: 'sitting',
    delay: 615,
  },
  {
    action: 'sitting-forwards',
    delay: 626.3999999985099,
  },
  {
    action: 'sitting',
    delay: 625.7000000029802,
  },
  {
    action: 'sitting-backwards',
    delay: 590.3999999985099,
  },
  {
    action: 'sitting',
    delay: 625.7999999970198,
  },
  {
    action: 'sitting-forwards',
    delay: 351,
  },
  {
    action: 'sitting',
    delay: 630.6000000014901,
  },
  {
    action: 'sitting-backwards',
    delay: 461.8999999985099,
  },
  {
    action: 'sitting',
    delay: 566.3000000044703,
  },
  {
    action: 'sitting-forwards',
    delay: 365.5,
  },
  {
    action: 'sitting',
    delay: 442.8999999985099,
  },
  {
    x: -2,
    delay: 554.5,
  },
  {
    action: 'sitting',
    delay: 143,
  },
  {
    x: -2,
    delay: 514.1999999955297,
  },
  {
    action: 'sitting',
    delay: 148.30000000447035,
  },
  {
    x: -2,
    delay: 838.8999999985099,
  },
  {
    action: 'sitting',
    delay: 149.20000000298023,
  },
];

async function perform() {
  while (true) {
    if (step === choreo.length) step = 0;

    const { delay, action, x } = choreo[step];
    console.log(delay, action, x);
    await sleep(delay);

    if (action) {
      me.action = action;
    }

    if (x) {
      me.x += x;
    }

    step += 1;
  }
}

perform();
