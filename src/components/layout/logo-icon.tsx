"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

export default function LogoIcon({ className }: { className?: string }) {
  const { theme } = useTheme();

  const logoColor = theme === "light" ? "fill-black" : "fill-white";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`w-full h-full ${logoColor} ${className}`)}
    >
      <path d="M15.4334 32.0023C15.2511 31.6139 15.0608 31.2325 15.0183 30.8353C14.97 30.3826 15.4359 30.0108 15.9341 30.0022C16.6546 29.9897 17.003 30.2094 16.9831 30.7839C16.97 31.1656 16.7853 31.5415 16.7143 31.9611C16.331 32.0023 15.9108 32.0023 15.4334 32.0023Z" />
      <path d="M16.6939 0C16.8345 0.410774 16.979 0.82051 16.986 1.23258C16.9954 1.78273 16.6573 2.00333 15.9805 2.00014C15.4721 1.99775 15.0572 1.64597 14.9962 1.21116C14.9298 0.736809 15.1039 0.378005 15.4124 0.0388588C15.7963 0 16.2165 0 16.6939 0Z" />
      <path d="M0 15.5566C0.185658 15.5011 0.40353 15.4395 0.549399 15.5157C0.766291 15.6289 0.932276 15.8397 1.11993 16.009C0.927069 16.173 0.749608 16.3631 0.534842 16.4902C0.427863 16.5534 0.252552 16.5012 0.0540756 16.5012C3.72556e-09 16.2048 0 15.9085 0 15.5566Z" />
      <path d="M13.2942 13.2518C14.0244 12.9361 14.6179 13.1791 15.1407 13.591C15.7568 14.0762 16.3119 14.0207 16.8481 13.5974C17.7877 12.8557 18.364 13.029 19.0083 13.4597C19.6998 13.9218 19.9633 14.7251 19.6044 15.4358C19.4167 15.8074 19.0572 16.1732 18.6843 16.3543C17.8046 16.7815 17.6266 16.9674 17.6262 17.9583C17.6259 18.5282 17.6812 19.0768 17.1711 19.5423C16.2785 20.3568 14.9154 20.1396 14.477 19.014C14.3429 18.6698 14.3435 18.2423 14.3889 17.8658C14.478 17.1272 13.9295 16.6095 13.4134 16.3897C12.7394 16.1027 12.2924 15.6477 12.261 14.9084C12.2295 14.169 12.535 13.579 13.2942 13.2518Z" />
      <path d="M11.4627 22.1369C10.9395 22.3496 10.4897 22.3229 10.1293 21.932C9.78576 21.5594 9.81981 21.1363 10.0159 20.6874C10.4181 19.7665 9.97036 18.996 8.99839 18.8734C8.43062 18.8018 7.98805 18.5288 7.88438 17.9301C7.7828 17.3433 8.09062 16.9748 8.62422 16.7466C10.005 16.1562 11.5613 16.5367 12.336 17.5615C13.4298 19.0083 13.1063 20.495 12.1869 21.6144C12.0126 21.8266 11.7392 21.9575 11.4627 22.1369Z" />
      <path d="M23.5317 16.8379C24.0925 17.0684 24.2077 17.5165 24.1069 17.9714C24.015 18.3864 23.7745 18.7009 23.2362 18.7683C21.9707 18.9266 21.5801 19.7368 22.0421 20.843C22.2287 21.2899 22.1606 21.6985 21.7936 22.0108C21.3952 22.3497 20.9147 22.3763 20.4839 22.1133C19.4729 21.4962 18.9638 20.5539 19.0147 19.3818C19.0617 18.2998 19.5196 17.4219 20.5251 16.8661C21.5194 16.3165 22.4939 16.2862 23.5317 16.8379Z" />
      <path d="M14.4861 11.6726C13.4609 10.9917 12.9035 10.1271 12.9913 8.89301C13.0226 8.45209 13.1713 8.10195 13.5951 8.03095C14.0392 7.95658 14.573 7.85066 14.867 8.35842C15.4425 9.35215 16.5601 9.34851 17.1334 8.3619C17.4303 7.85102 17.9601 7.9586 18.4032 8.02989C18.8271 8.09809 18.966 8.45053 19.012 8.88833C19.2336 11.0015 16.97 12.8024 14.4861 11.6726Z" />
      <path d="M26.1141 11.3766C24.9239 11.6015 24.333 12.5224 23.6446 13.3059C23.0225 14.0138 21.8623 13.9539 21.2739 13.2206C20.7682 12.5903 20.8866 11.3643 21.6414 10.9627C22.1702 10.6813 22.8409 10.6798 23.4275 10.4895C23.8535 10.3512 24.2971 10.1728 24.6411 9.8977C25.1732 9.47224 25.9044 9.34128 26.2839 9.72178C26.7711 10.2102 26.7368 10.6792 26.1141 11.3766Z" />
      <path d="M11.0008 12.1428C11.087 12.9045 10.7688 13.4166 10.1371 13.6524C9.56017 13.8678 8.77407 13.8698 8.34665 13.2937C8.09188 12.9503 7.79395 12.6379 7.50498 12.3211C7.11928 11.8983 6.71414 11.5643 6.09346 11.4464C5.80997 11.3925 5.47713 10.9073 5.4185 10.5734C5.3691 10.2921 5.61316 9.86896 5.85512 9.64941C6.16563 9.36765 6.74455 9.28496 6.98755 9.59608C7.75334 10.5766 8.88438 10.4824 9.89412 10.7465C10.527 10.9121 10.9579 11.4075 11.0008 12.1428Z" />
      <path d="M14.748 24.6263C14.4417 23.9207 14.2935 23.2394 14.7276 22.6091C15.1931 21.9333 15.975 21.7371 16.7393 22.1266C17.4357 22.4816 17.7037 23.2825 17.4257 24.14C17.2967 24.5376 17.0918 24.9178 17.016 25.3236C16.9409 25.7255 16.9201 26.161 16.99 26.5618C17.1427 27.4384 16.7239 28.1075 15.8602 28.0097C15.2665 27.9425 14.8276 27.4208 15.0232 26.7204C15.2335 25.967 15.0402 25.332 14.748 24.6263Z" />
      <path d="M5.26836 19.2039C6.65403 19.6109 7.73426 21.054 7.86856 22.3622C7.91293 22.7944 7.95442 23.2549 7.85054 23.6654C7.7676 23.9932 7.52363 24.3687 7.24059 24.5361C6.84148 24.7721 6.30455 24.7241 6.0317 24.3053C5.84837 24.024 5.74243 23.5534 5.84472 23.2492C6.25482 22.0292 6.00848 21.5132 4.7581 21.2488C4.12446 21.1148 3.68275 20.5974 3.75096 20.0689C3.84885 19.3104 4.24855 19.0669 5.26836 19.2039Z" />
      <path d="M27.1222 21.2514C25.948 21.4945 25.7918 22.2246 26.1378 23.1247C26.3212 23.6018 26.3076 24.0105 25.9463 24.3563C25.5667 24.7196 25.0834 24.758 24.6557 24.4899C24.429 24.3478 24.2254 24.0553 24.1571 23.7928C23.7091 22.0714 24.9854 19.7345 26.6541 19.1584C27.2833 18.9412 28.0156 19.2292 28.215 19.7722C28.448 20.4065 28.0768 20.9331 27.1222 21.2514Z" />
      <path d="M19.0013 4.03473C19.1449 4.95991 18.4576 5.29807 17.899 5.59971C16.5988 6.30188 14.3355 6.22124 13.2397 4.92759C12.9171 4.54663 12.9111 3.72569 13.265 3.43012C13.7023 3.06486 14.5421 3.14595 14.872 3.58528C15.6692 4.64718 16.2778 4.62212 17.1502 3.58105C17.3484 3.34458 17.78 3.17106 18.0888 3.19228C18.5106 3.22126 18.9621 3.41521 19.0013 4.03473Z" />
      <path d="M25.2872 16.3483C25.1143 16.2188 24.9764 16.1223 24.8021 16.0004C25.8686 15.1245 27.0368 14.8722 28.2785 15.0209C28.7849 15.0816 29.0281 15.4967 29.0113 16.0534C28.995 16.5938 28.7188 16.9331 28.2376 16.986C27.2133 17.0987 26.2178 16.9492 25.2872 16.3483Z" />
      <path d="M4.38129 17.0012C3.28347 17.0012 2.83953 16.616 3.02804 15.7522C3.09056 15.4657 3.45307 15.0673 3.71894 15.0328C4.95755 14.8724 6.12565 15.1255 7.19318 15.9911C6.37356 16.6786 5.47686 17.0198 4.38129 17.0012Z" />
      <path d="M22.5735 4.76076C23.1088 5.30299 23.1999 5.87642 22.7484 6.41479C22.2553 7.00286 21.6869 7.53141 21.1196 8.05136C20.96 8.19769 20.6891 8.22262 20.4451 8.31209C20.1871 7.03557 20.5567 5.94928 21.1532 4.95664C21.448 4.46627 22.0277 4.54826 22.5735 4.76076Z" />
      <path d="M9.01293 26.7886C8.99718 25.4701 10.4248 23.8146 11.5715 23.7683C11.8203 24.9686 11.407 26.0316 10.8621 27.0558C10.666 27.4244 9.75686 27.5124 9.42124 27.2314C9.27903 27.1123 9.15557 26.9709 9.01293 26.7886Z" />
      <path d="M11.039 8.13586C10.3802 7.53245 9.70841 6.98807 9.19025 6.32385C8.98069 6.05523 8.98962 5.48602 9.11014 5.12382C9.25242 4.69621 9.71902 4.49549 10.1834 4.64016C10.4581 4.72572 10.7782 4.90207 10.9208 5.13413C11.57 6.19082 11.6975 6.89664 11.5862 8.27138C11.4138 8.22825 11.2508 8.18749 11.039 8.13586Z" />
      <path d="M20.3765 24.1563C20.4863 23.9838 20.6051 23.7616 20.7044 23.77C21.4502 23.8335 22.9746 25.6257 23.0111 26.3785C23.0365 26.9022 22.7542 27.2474 22.3467 27.3491C21.8718 27.4677 21.3428 27.4441 21.0491 26.8656C20.624 26.0282 20.2932 25.1757 20.3765 24.1563Z" />
      <path d="M29.6217 22.6268C30.1017 23.1711 30.1945 23.9533 29.7267 24.25C29.4031 24.4552 28.8429 24.4699 28.4575 24.3493C27.9726 24.1974 27.8293 23.5318 28.0644 23.0065C28.2787 22.5276 28.6758 22.3836 29.1746 22.5018C29.3088 22.5336 29.4392 22.5814 29.6217 22.6268Z" />
      <path d="M27.9129 8.58918C28.0412 7.96577 28.2132 7.42078 29.0123 7.49232C29.5174 7.53753 29.961 7.84713 30.0021 8.27748C30.0574 8.85661 29.757 9.40582 29.3338 9.49938C28.6931 9.64103 28.1977 9.4037 28.0049 8.8603C27.9783 8.78533 27.9637 8.70608 27.9129 8.58918Z" />
      <path d="M3.42243 9.48392C2.32575 9.50416 2.0091 9.25723 1.99491 8.47603C1.98609 7.99038 2.18985 7.6039 2.6359 7.52513C3.11251 7.44095 3.67774 7.36889 3.94299 8.00208C4.15016 8.49661 4.02222 9.0877 3.62462 9.37695C3.57692 9.41165 3.52368 9.43874 3.42243 9.48392Z" />
      <path d="M2.00015 23.6059C2.01262 22.9039 2.34413 22.5167 2.9008 22.5016C3.64469 22.4814 4.06983 22.8154 4.12014 23.4595C4.15106 23.8553 3.68365 24.4453 3.29495 24.5011C2.58018 24.6038 2.13452 24.3137 2.00015 23.6059Z" />
      <path d="M20.6694 28.1577C20.8474 28.1881 21.1121 28.281 21.1073 28.2978C20.9636 28.8075 20.8261 29.325 20.6028 29.8016C20.5511 29.9119 20.0953 29.9807 19.9968 29.8875C19.8395 29.7385 19.6933 29.3631 19.7766 29.2161C19.9933 28.8338 20.3373 28.5236 20.6694 28.1577Z" />
      <path d="M19.9561 3.14653C19.6302 2.72003 19.6032 2.28598 20.0459 2.0612C20.4499 1.856 20.7301 2.21674 20.8495 2.57487C20.9934 3.00625 21.0618 3.46281 21.1629 3.90847C21.076 3.95426 20.989 4.00006 20.9021 4.04585C20.5987 3.75732 20.2952 3.46879 19.9561 3.14653Z" />
      <path d="M11.0023 2.91367C11.091 2.68233 11.1333 2.43645 11.2767 2.33808C11.4687 2.20643 11.7536 2.10408 11.9726 2.1415C12.3519 2.20633 12.4 2.58868 12.2338 2.82712C11.9209 3.27593 11.5119 3.65767 11.1428 4.06729C11.0534 4.01883 10.964 3.97037 10.8746 3.92192C10.9167 3.60288 10.9588 3.28384 11.0023 2.91367Z" />
      <path d="M30.252 19.1167C29.923 19.7255 29.5622 19.8109 29.2796 19.3035C29.0115 18.8221 28.9275 18.2381 28.8622 17.6542C29.5384 17.9632 30.131 18.2933 30.252 19.1167Z" />
      <path d="M2.94875 14.357C2.54757 13.9879 2.16242 13.6588 1.85296 13.2694C1.65684 13.0227 1.64704 12.7249 1.99146 12.4939C2.36062 12.2463 2.59637 12.4405 2.75137 12.7091C3.04608 13.2199 3.30733 13.7604 2.94875 14.357Z" />
      <path d="M29.7514 12.3788C30.2981 12.6739 30.4257 13.0371 30.0892 13.4486C29.7881 13.8169 29.3996 14.1137 29.0083 14.4809C28.7529 13.5455 29.0452 12.7459 29.7514 12.3788Z" />
      <path d="M2.51936 19.5444C1.74698 19.5631 1.48612 19.1691 1.89975 18.5981C2.18633 18.2024 2.60261 17.9008 3.06446 17.4579C3.20155 18.3499 3.03016 18.9691 2.51936 19.5444Z" />
      <path d="M10.8868 28.2151C11.4367 27.951 11.7226 28.3915 11.9465 28.6935C12.1437 28.9595 12.2384 29.4141 12.1656 29.7375C12.0861 30.0901 11.4358 30.0346 11.2663 29.6371C11.081 29.2028 11.0023 28.7231 10.8868 28.2151Z" />
      <path d="M23.979 5.58615C24.4311 5.1735 24.931 5.0968 25.4777 5.11652C25.8245 5.12902 26.0089 5.19628 26.0127 5.59825C26.0165 6.00693 25.8697 6.13233 25.4696 6.13559C24.8918 6.1403 24.3565 6.08766 23.979 5.58615Z" />
      <path d="M6.00046 26.3772C6.12764 25.852 6.74847 25.6941 7.40274 25.9716C7.63953 26.072 7.86944 26.1886 8.11354 26.3031C7.63378 26.9181 6.9734 26.927 6.31351 26.8562C6.19539 26.8436 6.10412 26.5804 6.00046 26.3772Z" />
      <path d="M7.28842 5.13852C7.56358 5.28092 7.78725 5.41187 8.01367 5.54443C7.64887 6.05376 6.69895 6.36183 6.21641 6.08866C6.07969 6.01126 6.00499 5.70538 6.02198 5.51501C6.03438 5.37609 6.22651 5.17307 6.36902 5.14295C6.64702 5.0842 6.9464 5.12657 7.28842 5.13852Z" />
      <path d="M24.7148 25.8898C24.9949 25.878 25.2245 25.8931 25.4511 25.8734C25.8385 25.8396 26.0122 25.9638 26.0139 26.3901C26.0157 26.8463 25.778 26.931 25.4257 26.8718C24.9356 26.7893 24.4516 26.671 23.965 26.568C23.9663 26.4864 23.9675 26.4048 23.9688 26.3233C24.2001 26.1826 24.4315 26.0419 24.7148 25.8898Z" />
      <path d="M24.2516 2.52481C24.2428 2.91861 24.146 3.22137 23.7299 3.11048C23.5154 3.0533 23.17 2.81967 23.1855 2.70733C23.2166 2.48208 23.4233 2.1639 23.6171 2.11358C23.786 2.0697 24.0369 2.34116 24.2516 2.52481Z" />
      <path d="M31.911 16.4054C31.5238 16.4965 31.1141 16.69 30.9757 16.1574C30.9349 16.0002 30.9756 15.7133 31.0787 15.651C31.2669 15.5374 31.5325 15.5078 31.7596 15.525C31.849 15.5318 31.963 15.7496 31.9911 15.8866C32.022 16.0376 31.9671 16.2063 31.911 16.4054Z" />
      <path d="M8.23777 2.00527C8.45996 2.21186 8.69187 2.39778 8.78101 2.63692C8.82102 2.74424 8.58698 3.08364 8.45675 3.09569C8.23135 3.11654 7.86651 3.02587 7.78814 2.86847C7.70052 2.69249 7.85071 2.38476 7.93232 2.14632C7.95561 2.07829 8.10029 2.05182 8.23777 2.00527Z" />
      <path d="M8.70929 29.0291C8.85789 29.7259 8.59793 30.0995 8.1385 29.9536C7.75826 29.8329 7.65037 29.5353 7.77041 29.2384C7.93561 28.8298 8.28535 28.7546 8.70929 29.0291Z" />
      <path d="M24.168 29.1056C24.2764 29.7704 24.0367 30.1159 23.6356 29.9303C23.4418 29.8407 23.2475 29.628 23.1821 29.4289C23.1385 29.296 23.3018 28.958 23.4082 28.9414C23.6367 28.9058 23.8883 29.0188 24.168 29.1056Z" />
    </svg>
  );
}
