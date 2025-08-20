import * as React from "react";
import * as Switch from '@radix-ui/react-switch';

const ExtensionSwitch = ({checked, onCheckedChange}) => (
	<form>
		<div className="flex items-center">
			<Switch.Root
				className="relative h-[25px] w-[42px] cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-[hsl(3,77%,44%)]"
				id="airplane-mode"
				style={{ WebkitTapHighlightColor : "rgba(0, 0, 0, 0)"} as React.CSSProperties}
				checked={checked}
				onCheckedChange={onCheckedChange}
			>
				<Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
			</Switch.Root>
		</div>
	</form>
);

export default ExtensionSwitch;
