import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill = "#FE0316" }) {
    return (
        <svg t="1611652700332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11071" width="48px" height="48px">
            <path d="M249.856 253.952s-52.224-170.496 6.656-163.84S350.208 158.72 350.208 158.72s181.76-79.36 300.032-4.608c0 0 74.752-91.136 107.008-81.92 31.744 9.216 2.048 170.496 2.048 170.496s211.456 233.984-66.048 390.656l15.872 140.8s109.056 109.056-25.088 154.624c0 0 63.488 50.176-77.312 27.136 0 0-181.76 22.528-292.864 4.608 0 0-47.616 22.528-52.224-22.528 0 0-120.32-29.696-25.088-140.8 0 0 45.568-52.224 72.704-25.088 7.168-29.696 12.288-56.32 17.408-87.552 3.072-19.456 9.728-58.88 16.384-51.712 1.536 1.536-60.928-24.064-64-26.112-52.736-30.72-94.72-92.672-101.888-153.6-5.632-47.104 8.704-99.84 31.232-141.312 10.752-21.504 25.088-40.448 41.472-57.856z" fill="#FFFFFF" p-id="11072"></path>
            <path d="M256 252.416c-11.776-37.888-22.016-79.36-20.992-118.784 0-9.728 0.512-23.552 7.168-31.232 11.776-13.312 36.864-0.512 49.664 6.656 21.504 11.776 40.448 31.744 52.736 53.248 2.048 3.072 5.632 3.584 8.704 2.048 88.576-38.4 207.36-56.832 293.376-4.608 2.048 1.536 6.144 1.024 7.68-1.024 14.336-16.896 93.184-107.52 107.008-69.12 8.704 23.04 3.072 55.296 1.024 79.36-2.048 22.528-8.192 46.08-9.216 68.608-0.512 16.896 19.968 34.304 29.184 48.64 26.624 42.496 46.592 91.136 47.104 141.824 1.024 91.648-65.024 157.696-139.776 200.704-1.536 1.024-3.584 3.584-3.072 5.632 3.072 25.088 5.632 50.176 8.704 75.264 2.048 16.384 3.584 32.768 5.632 48.64 0.512 6.144 0 14.336 2.56 19.968 2.048 4.608 7.68 8.704 10.752 12.8 8.704 10.752 15.872 22.016 21.504 34.304 22.016 48.64-7.68 81.408-53.76 98.304-4.096 1.536-7.168 7.68-3.072 10.752 3.072 2.56 8.192 6.144 9.728 9.728 5.632 12.8-8.704 11.776-19.456 12.288-22.016 1.024-44.032-6.144-66.048-5.632-14.336 0.512-29.184 3.072-43.52 4.608-57.344 5.12-114.688 8.192-172.032 6.144-24.576-1.024-54.272-8.704-77.824-5.632-20.48 2.56-37.888 11.776-43.008-18.944-0.512-2.048-2.56-4.096-4.608-4.608-23.552-6.144-50.176-22.528-55.808-48.128-6.656-29.696 15.36-61.952 34.304-82.432 13.824-15.36 42.496-41.984 63.488-24.576 3.584 3.072 9.728 2.048 10.752-3.072 6.656-27.648 11.776-55.296 16.384-82.944 1.536-9.216 3.072-18.944 5.12-28.16 1.024-4.096 1.536-8.192 2.56-12.288 2.048-7.168 5.632-9.728 0-12.288 0.512-4.096 1.024-7.68 1.536-11.776 4.608-1.024-3.584-1.536-5.632-3.072-4.608-3.072-11.776-4.608-16.896-6.656-10.752-4.096-21.504-8.192-32.256-13.312-33.792-16.384-60.928-47.104-79.36-79.36-49.664-88.064-19.456-195.072 47.104-265.216 5.632-6.144-3.584-14.848-9.216-9.216C175.104 323.072 143.36 434.688 193.024 527.36c18.944 35.328 49.152 70.144 86.016 87.552 12.8 6.144 26.624 11.264 39.936 16.384 6.144 2.56 17.408 9.728 24.576 7.68 5.12-1.024 6.656-9.216 1.536-11.776-15.872-7.168-18.944 19.456-20.992 29.184-8.192 37.888-12.8 76.288-22.016 114.176l10.752-3.072c-49.664-41.472-116.736 58.88-120.32 99.84-2.048 24.576 10.24 45.568 29.696 59.904 7.68 5.12 15.36 9.728 24.064 12.8 2.048 1.024 7.168 1.536 8.704 3.072 4.608 4.096-1.024-2.048 1.536 8.192 7.168 27.648 35.328 19.456 54.784 16.896 11.776-1.536 27.648 2.56 40.448 3.584 26.112 2.048 52.736 2.56 78.848 2.56 44.544-0.512 89.088-3.072 133.632-7.168 11.776-1.024 23.552-3.072 34.816-3.584 15.872-1.024 31.232 3.072 47.104 4.608 14.336 1.024 56.32 6.144 57.344-17.92 0.512-9.728-9.216-19.456-16.384-25.6l-3.072 10.752c54.272-19.456 87.552-59.904 61.44-116.736-7.68-16.384-18.432-32.256-30.72-45.568-5.632-5.632-0.512 5.12-1.536-3.072-1.024-10.752-2.56-21.504-3.584-31.744-3.072-28.16-6.144-56.32-9.728-83.968-0.512-3.584-4.096-16.384-2.048-19.456-0.512 0.512 22.528-10.752 25.6-12.8 9.216-6.144 17.92-12.8 26.624-19.456 51.2-40.96 88.064-97.792 90.624-164.864 1.536-49.664-14.848-98.304-38.912-141.312-8.704-15.36-18.432-30.208-29.184-44.032-2.56-3.072-5.12-8.192-8.192-10.752-5.632-4.096-1.024 3.072-0.512 1.024 5.632-17.92 6.144-39.936 8.192-58.368 3.072-28.16 6.144-57.344 2.56-85.504-8.192-56.32-56.832-22.528-83.456 2.048-12.288 11.264-23.552 23.04-34.304 34.816-2.56 3.072-6.656 9.728-10.24 11.264-0.512 0-1.536 2.56-2.56 2.56 7.168-1.024-4.608-7.168-5.12-7.68-13.824-12.8-43.008-17.408-60.416-20.992-20.992-4.096-41.984-5.632-62.976-5.12-57.856 1.024-117.76 14.336-170.496 37.376 3.072 0.512 5.632 1.536 8.704 2.048C336.896 124.928 250.368 43.52 225.28 103.424c-10.752 26.112-3.584 59.904 1.024 86.528 4.096 22.016 9.216 44.032 15.872 65.536 4.096 8.192 16.384 4.608 13.824-3.072z" fill="#231815" p-id="11073"></path>
            <path d="M703.488 726.528s61.44-6.656 76.288 36.352c14.848 43.008-1.024 71.68-26.112 81.92-25.088 10.24-68.096-26.112-68.096-26.112l17.92-92.16z" fill="#E4B071" p-id="11074"></path>
            <path d="M703.488 733.184c23.04-2.56 52.736 2.56 66.048 23.552 12.8 20.48 14.336 54.784-3.584 72.704-17.408 17.408-38.912 9.216-56.832-2.048-4.608-2.56-9.728-8.192-14.336-9.728-7.68-2.56-2.56 0-2.56 1.024 0.512-9.216 3.584-19.456 5.632-28.16 4.096-20.48 8.192-40.96 12.288-61.952 1.536-8.192-10.752-11.264-12.288-3.584l-18.432 92.16c-0.512 2.048 0 4.608 1.536 6.144 16.384 13.312 37.376 28.16 58.88 29.696 26.624 2.048 47.104-22.528 51.2-46.592 9.216-56.32-34.816-91.136-87.04-86.016-8.704 0.512-8.704 13.312-0.512 12.8z" fill="#231815" p-id="11075"></path>
            <path d="M182.784 459.776s15.872-165.888 137.216-190.976c-7.68 1.536-19.456 28.16-18.944 34.816 2.56 32.256 78.848 2.048 92.16-2.56 41.472-14.336 85.504-18.944 129.536-18.432 43.008 0.512 84.48 12.288 127.488 14.848 35.84 2.56 60.416-10.752 36.864-47.616 0 0 94.208 15.872 134.144 118.272-9.728-25.088-16.384-50.176-28.672-74.752-13.312-25.6-22.528-31.744-43.008-52.224-10.752-10.752-36.352-33.792-48.64-42.496-9.728-7.168-20.992-15.872-22.528-28.672-1.024-9.216 7.168-20.48 11.264-28.16 12.8-26.112 33.28-48.64 55.296-68.096 0 0-91.136 55.808-95.232 79.36 0 0-37.376-40.96-152.064-30.72s-150.016 40.96-150.016 40.96-29.696-71.68-91.136-73.728c0 0 140.8 133.12-6.656 163.84 0 0.512-106.496 117.76-67.072 206.336zM261.12 937.984s100.864-75.776 67.584-195.584l-19.456 29.696s-51.712-32.768-98.304 69.12c-0.512 0-43.008 55.808 50.176 96.768zM693.248 633.344s-115.712 177.152-9.216 295.424c0 0 69.12-18.432 69.12-75.776s-50.176-86.528-50.176-86.528l-9.728-133.12z" fill="#E4B071" p-id="11076"></path>
            <path d="M256 252.416c-11.776-37.888-22.016-79.36-20.992-118.784 0-9.728 0.512-23.552 7.168-31.232 11.776-13.312 36.864-0.512 49.664 6.656 21.504 11.776 40.448 31.744 52.736 53.248 2.048 3.072 5.632 3.584 8.704 2.048 88.576-38.4 207.36-56.832 293.376-4.608 2.048 1.536 6.144 1.024 7.68-1.024 14.336-16.896 93.184-107.52 107.008-69.12 8.704 23.04 3.072 55.296 1.024 79.36-2.048 22.528-8.192 46.08-9.216 68.608-0.512 16.896 19.968 34.304 29.184 48.64 26.624 42.496 46.592 91.136 47.104 141.824 1.024 91.648-65.024 157.696-139.776 200.704-1.536 1.024-3.584 3.584-3.072 5.632 3.072 25.088 5.632 50.176 8.704 75.264 2.048 16.384 3.584 32.768 5.632 48.64 0.512 6.144 0 14.336 2.56 19.968 2.048 4.608 7.68 8.704 10.752 12.8 8.704 10.752 15.872 22.016 21.504 34.304 22.016 48.64-7.68 81.408-53.76 98.304-4.096 1.536-7.168 7.68-3.072 10.752 3.072 2.56 8.192 6.144 9.728 9.728 5.632 12.8-8.704 11.776-19.456 12.288-22.016 1.024-44.032-6.144-66.048-5.632-14.336 0.512-29.184 3.072-43.52 4.608-57.344 5.12-114.688 8.192-172.032 6.144-24.576-1.024-54.272-8.704-77.824-5.632-20.48 2.56-37.888 11.776-43.008-18.944-0.512-2.048-2.56-4.096-4.608-4.608-23.552-6.144-50.176-22.528-55.808-48.128-6.656-29.696 15.36-61.952 34.304-82.432 13.824-15.36 42.496-41.984 63.488-24.576 3.584 3.072 9.728 2.048 10.752-3.072 6.656-27.648 11.776-55.296 16.384-82.944 1.536-9.216 3.072-18.944 5.12-28.16 1.024-4.096 1.536-8.192 2.56-12.288 2.048-7.168 5.632-9.728 0-12.288 0.512-4.096 1.024-7.68 1.536-11.776 4.608-1.024-3.584-1.536-5.632-3.072-4.608-3.072-11.776-4.608-16.896-6.656-10.752-4.096-21.504-8.192-32.256-13.312-33.792-16.384-60.928-47.104-79.36-79.36-49.664-88.064-19.456-195.072 47.104-265.216 5.632-6.144-3.584-14.848-9.216-9.216C175.104 323.072 143.36 434.688 193.024 527.36c18.944 35.328 49.152 70.144 86.016 87.552 12.8 6.144 26.624 11.264 39.936 16.384 6.144 2.56 17.408 9.728 24.576 7.68 5.12-1.024 6.656-9.216 1.536-11.776-15.872-7.168-18.944 19.456-20.992 29.184-8.192 37.888-12.8 76.288-22.016 114.176l10.752-3.072c-49.664-41.472-116.736 58.88-120.32 99.84-2.048 24.576 10.24 45.568 29.696 59.904 7.68 5.12 15.36 9.728 24.064 12.8 2.048 1.024 7.168 1.536 8.704 3.072 4.608 4.096-1.024-2.048 1.536 8.192 7.168 27.648 35.328 19.456 54.784 16.896 11.776-1.536 27.648 2.56 40.448 3.584 26.112 2.048 52.736 2.56 78.848 2.56 44.544-0.512 89.088-3.072 133.632-7.168 11.776-1.024 23.552-3.072 34.816-3.584 15.872-1.024 31.232 3.072 47.104 4.608 14.336 1.024 56.32 6.144 57.344-17.92 0.512-9.728-9.216-19.456-16.384-25.6l-3.072 10.752c54.272-19.456 87.552-59.904 61.44-116.736-7.68-16.384-18.432-32.256-30.72-45.568-5.632-5.632-0.512 5.12-1.536-3.072-1.024-10.752-2.56-21.504-3.584-31.744-3.072-28.16-6.144-56.32-9.728-83.968-0.512-3.584-4.096-16.384-2.048-19.456-0.512 0.512 22.528-10.752 25.6-12.8 9.216-6.144 17.92-12.8 26.624-19.456 51.2-40.96 88.064-97.792 90.624-164.864 1.536-49.664-14.848-98.304-38.912-141.312-8.704-15.36-18.432-30.208-29.184-44.032-2.56-3.072-5.12-8.192-8.192-10.752-5.632-4.096-1.024 3.072-0.512 1.024 5.632-17.92 6.144-39.936 8.192-58.368 3.072-28.16 6.144-57.344 2.56-85.504-8.192-56.32-56.832-22.528-83.456 2.048-12.288 11.264-23.552 23.04-34.304 34.816-2.56 3.072-6.656 9.728-10.24 11.264-0.512 0-1.536 2.56-2.56 2.56 7.168-1.024-4.608-7.168-5.12-7.68-13.824-12.8-43.008-17.408-60.416-20.992-20.992-4.096-41.984-5.632-62.976-5.12-57.856 1.024-117.76 14.336-170.496 37.376 3.072 0.512 5.632 1.536 8.704 2.048C336.896 124.928 250.368 43.52 225.28 103.424c-10.752 26.112-3.584 59.904 1.024 86.528 4.096 22.016 9.216 44.032 15.872 65.536 4.096 8.192 16.384 4.608 13.824-3.072z" fill="#231815" p-id="11077"></path>
            <path d="M535.04 272.384c2.048 16.384-23.552 43.008-49.152 46.08-25.6 3.072-42.496-18.432-44.544-34.816s17.408-31.744 43.008-34.816c26.624-3.584 49.152 7.168 50.688 23.552z" fill="#20120C" p-id="11078"></path>
            <path d="M451.072 363.008s-27.136 113.664 38.4 105.472c66.048-8.192 46.592-98.816 46.592-98.816s-31.744-17.92-84.992-6.656z" fill="#E4805B" p-id="11079"></path>
            <path d="M394.752 296.96c-12.288 30.72-22.016 81.92 23.04 88.576 19.968 3.072 34.816-8.192 53.76-11.264 29.696-5.12 54.272 7.168 82.944 11.776 54.272 8.704 48.64-59.904 38.912-94.208-4.608-15.872-29.184-9.216-24.576 6.656 5.632 20.48 17.92 69.632-17.408 60.416-29.696-8.192-58.88-15.36-90.112-8.192-11.776 2.56-26.112 12.8-38.4 10.24-25.6-4.608-9.728-41.472-3.584-56.832 6.144-15.872-18.432-22.528-24.576-7.168z" fill="#20120C" p-id="11080"></path>
            <path d="M504.255637 272.308466a22.016 6.656 11.625 1 0 2.682439-13.038937 22.016 6.656 11.625 1 0-2.682439 13.038937Z" fill="#FFFFFF" p-id="11081"></path>
            <path d="M554.496 741.376s-30.72 180.736-22.528 196.608c0 0-27.136 28.16 25.088 36.352 52.224 8.192 56.832-21.504 47.616-34.304 13.824-25.6 27.136-51.712 39.936-78.336 17.92-37.888 46.08-84.992 46.592-128.512 0-22.528-11.264-72.704-40.96-72.704" fill="#FFFFFF" p-id="11082"></path>
            <path d="M548.352 739.84c-6.144 36.352-11.776 73.216-16.896 109.568-3.072 23.04-6.656 46.592-7.168 70.144 0 6.144 0.512 11.776 0.512 17.92 0 5.12 3.072-7.168 1.024-2.048-1.024 2.56-3.584 4.608-4.608 7.168-18.944 40.96 63.488 49.152 84.48 29.696 5.12-4.608 8.192-10.752 8.704-17.92 1.024-11.264-4.096-12.8 2.56-23.552 23.04-38.912 43.008-82.432 60.928-123.392 13.824-31.232 23.552-64.512 15.872-98.816-5.12-24.064-16.896-51.2-44.032-53.76-8.192-1.024-8.192 11.776 0 12.8 22.016 2.048 29.696 31.744 32.768 49.664 4.096 23.552-1.536 47.616-10.24 69.632-19.456 51.712-47.616 102.4-73.728 150.528-1.024 2.048-1.024 4.608 0 6.656 24.064 38.912-91.648 30.208-62.464-1.024 1.536-1.536 2.56-4.096 1.536-6.144-4.096-10.752-0.512-26.624 0.512-37.888 2.048-23.04 5.12-45.568 8.704-68.096 4.096-29.184 8.704-58.368 13.824-87.04 1.536-8.704-10.752-12.288-12.288-4.096z" fill="#20120C" p-id="11083"></path>
            <path d="M342.528 632.32s131.584-100.352 149.504-100.864c0 0-13.824-26.112-16.896-33.792-3.072-7.68 3.072-20.48 25.6-14.336 7.68 2.048 13.824 13.824 21.504 17.408 15.36 6.656 30.208 6.656 35.84 13.312 31.744 41.984-1.024 69.632-16.384 67.584-15.872 24.576-32.768 48.64-49.664 72.192-24.576 33.792-52.736 81.408-91.136 101.888-19.456 10.752-69.12 24.576-82.944-1.536" fill="#FFFFFF" p-id="11084"></path>
            <path d="M345.6 637.952c20.992-15.872 42.496-31.744 64-47.104 15.872-11.264 31.744-22.528 48.128-33.28 9.216-6.144 22.528-17.92 34.304-19.456 4.608-0.512 8.192-5.12 5.632-9.728-2.048-4.608-17.408-27.648-15.36-30.72 7.68-1.024 15.36-2.56 22.528-3.584 1.536 1.536 2.56 3.072 4.096 4.608 2.048 1.024 3.584 3.584 5.632 5.12 7.168 5.12 15.36 6.144 23.552 9.216 26.112 10.752 38.912 48.128 7.68 62.464-3.072 1.536-6.144 0-9.216 2.048-7.68 6.144-14.336 22.016-19.968 29.696-26.112 37.888-51.712 79.36-83.456 113.664-18.944 20.48-85.504 68.608-111.104 31.232-4.608-6.656-15.872-0.512-11.264 6.656 28.672 41.984 96.768 5.632 122.88-19.968 24.576-23.552 42.496-53.248 62.464-80.896 13.312-18.432 26.624-36.864 39.424-55.808 9.216-13.824 9.728-10.24 22.016-17.92 16.896-10.24 22.528-30.72 17.408-49.152-3.072-10.752-9.216-23.04-18.944-29.184-7.168-4.608-16.384-4.096-24.064-7.168-14.336-6.144-13.312-10.24-23.552-16.896-11.264-7.68-32.768-9.216-39.936 5.632-6.656 14.848 10.24 36.352 16.896 48.128 2.048-3.072 3.584-6.656 5.632-9.728-27.648 3.584-58.368 32.768-80.384 48.64-24.576 17.408-48.64 35.328-72.192 53.248-5.632 4.096 1.024 15.36 7.168 10.24z" fill="#20120C" p-id="11085"></path>
            <path d="M425.472 248.832c3.072 15.872-18.432 2.56-40.96 6.656s-37.888 24.064-40.96 8.192 13.312-31.744 35.84-35.84c22.528-4.096 43.008 5.12 46.08 20.992zM642.048 259.584c-2.048 15.872-18.432-3.072-41.472-5.632-23.04-2.56-43.52 11.776-41.472-4.096 2.048-15.872 22.016-26.624 44.544-24.064 23.552 3.072 40.448 17.92 38.4 33.792zM274.944 172.544s46.592 31.744 20.48 66.048M736.256 144.896s-29.696 38.4-11.264 63.488M734.208 766.464c7.68 13.312 10.752 29.696 6.656 44.032-2.56 7.68 9.728 11.264 12.288 3.584 5.632-17.92 1.536-37.888-7.68-54.272-4.096-6.656-15.36-0.512-11.264 6.656z" fill="#231815" p-id="11086"></path>
            <path d="M392.664462 190.103494a15.872 30.72 80.008 1 0 60.508078-10.660496 15.872 30.72 80.008 1 0-60.508078 10.660496Z" fill="#FFFFFF" p-id="11087"></path>
            <path d="M561.390255 200.360544a30.72 15.872 8.008 1 0 4.4223-31.434453 30.72 15.872 8.008 1 0-4.4223 31.434453Z" fill="#FFFFFF" p-id="11088"></path>
            <path d="M487.424 389.12c3.584 22.528 4.608 54.784-13.312 71.68-6.144 6.144 8.192 6.144 11.776 2.56 19.968-18.944 20.48-52.736 16.384-78.336-0.512-5.12-15.36-1.536-14.848 4.096z" fill="#CB3F1C" p-id="11089"></path>
            <path d="M245.76 348.16a56.32 25.6 0 1 0 112.64 0 56.32 25.6 0 1 0-112.64 0Z" fill="#EDA99E" p-id="11090"></path>
            <path d="M634.88 348.16a56.32 25.6 0 1 0 112.64 0 56.32 25.6 0 1 0-112.64 0Z" fill="#EDA99E" p-id="11091"></path>
        </svg>
    );
}