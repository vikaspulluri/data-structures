import { logPerformance } from "../../perf-hook";
import { lcs_rec, lcs_memoization, lcs_tabulation } from "./lcs";
import { paths, paths_memo, paths_tab } from "./matrix-path";
import { min_cost, min_cost_memo, min_cost_tab } from "./min-cost";

class DP {
  lcs() {
    const s1 = 'abcdefghijklmnopqrstuvwxyz';
    const s2 = 'abcdefghjklmnoqrsuvwyz';

    logPerformance(lcs_rec, s1, s2);
    logPerformance(lcs_memoization(s1, s2))
    logPerformance(lcs_tabulation, s1, s2)
  }

  cost() {
    const matrix = [
      [3, 2, 12, 15, 10, 1, 2, 3],
      [6, 19, 7, 11, 17, 1, 2, 3],
      [8, 5, 12, 32, 21, 1, 2, 3],
      [3, 20, 2, 9, 7, 1, 2, 3],
      [3, 20, 2, 9, 7, 1, 2, 3],
      [8, 5, 12, 32, 21, 1, 2, 3]
    ];
    logPerformance(min_cost, matrix)
    logPerformance(min_cost_memo, matrix)
    logPerformance(min_cost_tab, matrix);
  }

  paths() {
    const matrix = [
      [0, 0, 1, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0]
    ];
    logPerformance(paths, matrix);
    logPerformance(paths_memo, matrix);
    logPerformance(paths_tab, matrix);
  }
}

const dp = new DP();

// dp.lcs();
// dp.cost();
dp.paths();